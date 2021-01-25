const getName = (node) => {
  return node.name;
};

const headNode = (linkedList, collection) => {
  return collection[linkedList];
};

const next = (head, collection) => {
  let nextAddress = head.next;
  return collection[`${nextAddress}`];
};

const nodeAt = (index, linkedList, collection) => {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }

  return node;
};

const addressAt = (index, linkedList, collection) => {
  if (index == 0) {
    return linkedList;
  } else {
    let node = nodeAt(index - 1, linkedList, collection);
    return node.next;
  }
};

const indexAt = (node, collection, linkedList) => {
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0;
  while (currentNode != node) {
    currentIdx++;
    currentNode = next(currentNode, collection);
  }
  return currentIdx;
};

const insertNodeAt = (index, newNodeAddress, linkedList, collection) => {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let subsequentNode = nodeAt(index, linkedList, collection);

  let previousNodeIdx = indexAt(previousNode, collection, linkedList);
  let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList);
  let previousNodeAddress = addressAt(previousNode, linkedList, collection);
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection);
  previousNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress];
  newNode.next = subsequentNodeAddress;
};

const deleteNodeAt = (index, linkedList, collection) => {
  let previousNode;
  let head = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    previousNode = head;
    head = next(head, collection);
  }
  previousNode.next = head.next;
};
