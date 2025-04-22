import { range } from '../../lib';

const parse = (input) => {
  let circuit = new Circuit();

  for (let l of input) {
    let [type, rcvs] = l.split(' -> ');
    let id = type;
    rcvs = rcvs.split(', ');
    if (type[0] === '%' || type[0] === '&') {
      id = id.slice(1);
      if (type[0] === '%') circuit.set(FlipFlop, id, rcvs);
      else circuit.set(Conjunction, id, rcvs);
    } else if (type === 'broadcaster') {
      circuit.set(Broadcaster, id, rcvs);
    }
  }

  circuit.buildGraph();
  return circuit;
};

export const solutionOne = (input, times = 1000) => {
  let circuit = parse(input);
  for (let i = 0; i < times; ++i) circuit.pushButton();
  circuit.printLogs();
  return circuit.score();
};

export const solutionTwo = (input) => {};

/* ================================ CLASSES ================================= */

class Circuit {
  constructor() {
    this.log = new Log(2);
    this.counter = new Counter();
    this.queue = [];
    this.graph = {
      button: new Broadcaster('button', this.counter, this.log, [
        'broadcaster',
      ]),
    };
    this.graph.button.receive(0, this.graph.button.id);
  }

  buildGraph() {
    this.graph.button.build(this.graph, 'button');
  }

  set(kind, id, rcvs) {
    this.graph[id] = new kind(id, this.counter, this.log, rcvs);
  }

  pushButton() {
    let id = '';
    this.queue.push('button');
    while (this.queue.length) {
      id = this.queue.pop();
      this.graph[id]?.send(this.queue);
    }
  }

  printLogs() {
    this.log.print();
  }

  score() {
    return this.counter.score();
  }
}

class Broadcaster {
  constructor(id, counter, log, receivers = []) {
    this.id = id;
    this.log = log;
    this.state = 0;
    this.counter = counter;
    this.receivers = receivers;
    this.attached = false;
  }

  receive(pulse) {
    this.log.log(0, `  ${this.id} receiving ${pulse}`);
    this.state = pulse;
  }

  send(queue) {
    this.receivers.forEach((r) => {
      this.log.log(1, `${this.id} -${this.state ? 'high' : 'low'}-> ${r.id}`);
      r.receive(this.state, this.id);
      this.counter.inc(this.state);
    });
    this.receivers.forEach((r) => {
      this.log.log(0, `  ${this.id} queueing send for ${r.id}`);
      queue.unshift(r.id);
    });
  }

  build(graph) {
    if (this.attached) return;
    this.attached = true;
    let refs = this.receivers.map((rid) => graph[rid] ?? new Sink());
    this.receivers.forEach((rid) => graph[rid]?.build(graph, this.id));
    this.receivers = refs;
  }
}

class FlipFlop extends Broadcaster {
  constructor(id, counter, log, receivers) {
    super(id, counter, log, receivers);
    this.shouldSend = false;
  }

  receive(pulse) {
    if (pulse) return;
    this.shouldSend = true;
    this.state = +!this.state;
  }

  send(queue) {
    if (this.shouldSend) {
      this.shouldSend = false;
      super.send(queue);
    }
  }
}

class Conjunction extends Broadcaster {
  constructor(id, counter, log, receivers) {
    super(id, counter, log, receivers);
    this.mem = {};
  }

  receive(pulse, from) {
    this.mem[from] = pulse;
    this.state = +!Object.values(this.mem).every(Boolean);
  }

  build(graph, from) {
    this.mem[from] = 0;
    super.build(graph, from);
  }
}

class Sink extends Broadcaster {
  send() {
    return;
  }
}

class Counter {
  constructor() {
    this.count = [0, 0];
  }

  inc(pulse) {
    this.count[pulse]++;
  }

  score() {
    return this.count[0] * this.count[1];
  }
}

class Log {
  constructor(level = 1) {
    this.level = level;
    this.logs = [];
  }

  log(level, s) {
    if (level >= this.level) this.logs.push(s);
  }

  print() {
    if (this.logs.length > 0) console.log(this.logs.join('\n'));
  }
}
