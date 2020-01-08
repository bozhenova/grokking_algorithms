"use strict";

const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};


const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;


const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

const processed = [];

function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let node = findLowestCostNode(costs);
while (node !== null) {
  let cost = costs[node];
  let neighbors = graph[node];
  for (let n in neighbors) {
    let newCost = cost + neighbors[n];
    if (newCost < costs[n]) {
      costs[n] = newCost;
      parents[n] = node;
    }
  }
  processed.push(node);
  node = findLowestCostNode(costs);
}
