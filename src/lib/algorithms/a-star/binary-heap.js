export class BinaryHeap {
  constructor(compareFunction) {
    this.content = [];
    this.compareFunction = compareFunction;
  }

  size() {
    return this.content.length;
  }

  rescoreElement(node) {
    this.sinkDown(this.content.indexOf(node));
  }

  push(element) {
    this.content.push(element);
    this.sinkDown(this.content.length - 1);
  }

  pop() {
    const result = this.content[0];
    const end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.bubbleUp(0);
    }
    return result;
  }

  // haven't needed this so far
  // remove(node) {
  //   const i = this.content.indexOf(node);
  //   const end = this.content.pop();
  //   if (i !== this.content.length - 1) {
  //     this.content[i] = end;
  //     if (this.scoreFunction(end) < this.scoreFunction(node)) {
  //       this.sinkDown(i);
  //     } else {
  //       this.bubbleUp(i);
  //     }
  //   }
  // }

  sinkDown(n) {
    const element = this.content[n];
    while (n > 0) {
      const parentN = ((n + 1) >> 1) - 1;
      const parent = this.content[parentN];
      if (this.compareFunction(element, parent)) {
        this.content[parentN] = element;
        this.content[n] = parent;
        n = parentN;
      } else {
        break;
      }
    }
  }

  bubbleUp(n) {
    const length = this.content.length;
    const element = this.content[n];

    while (true) {
      let swap = null;
      const child2n = (n + 1) << 1;
      const child1n = child2n - 1;
      const child1 = this.content[child1n];

      if (child1n < length) {
        if (this.compareFunction(child1, element)) {
          swap = child1n;
        }
      }

      if (child2n < length) {
        const child2 = this.content[child2n];
        if (this.compareFunction(child2, swap === null ? element : child1)) {
          swap = child2n;
        }
      }

      if (swap !== null) {
        this.content[n] = this.content[swap];
        this.content[swap] = element;
        n = swap;
      } else {
        break;
      }
    }
  }
}
