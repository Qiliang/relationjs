define(function(require){
	
	var springy=require('springy');
	require('springyui');
	
	var Graph=springy.Graph;
	var Node=springy.Node;
	var Edge=springy.Edge;
	var Layout=springy.Layout;
	var Vector=springy.Vector;
	var Renderer=springy.Renderer;
	
	
	var graph = new Graph();

	var dennis = graph.newNode({label: 'Dennis',name:'xxx'});
	var michael = graph.newNode({label: 'Michael'});
	var jessica = graph.newNode({label: 'Jessica'});
	var timothy = graph.newNode({label: 'Timothy'});
	var barbara = graph.newNode({label: 'Barbara'});
	var franklin = graph.newNode({label: 'Franklin'});
	var monty = graph.newNode({label: 'Monty'});
	var james = graph.newNode({label: 'James'});
	var bianca = graph.newNode({label: 'Bianca'});

	graph.newEdge(dennis, michael, {color: '#00A0B0'});
	graph.newEdge(michael, dennis, {color: '#6A4A3C'});
	graph.newEdge(michael, jessica, {color: '#CC333F'});
	graph.newEdge(jessica, barbara, {color: '#EB6841'});
	graph.newEdge(michael, timothy, {color: '#EDC951'});
	graph.newEdge(franklin, monty, {color: '#7DBE3C'});
	graph.newEdge(dennis, monty, {color: '#000000'});
	graph.newEdge(monty, james, {color: '#00A0B0'});
	graph.newEdge(barbara, timothy, {color: '#6A4A3C'});
	graph.newEdge(dennis, bianca, {color: '#CC333F'});
	graph.newEdge(bianca, monty, {color: '#EB6841'});

	$(function(){
		var springy = jQuery('#springydemo').springy({
			graph: graph,
			nodeSelected: function(node){
				console.log('Node selected: ' + JSON.stringify(node.data));
			}
		});
	});
	
});