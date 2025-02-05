﻿{
// Creating Project
var currentProject  = (app.project) ? app.project: app.newProject();
// Composition Settings Object
var cs = { name: 'Begin',
	  width: 3840,
	 height: 2160,
	  pixel: 1,
	   time: 60,
	  frame: 25
	};
// Create Composition
var currentComposition = (currentProject.activeItem) ? currentProject.activeItem: currentProject.items.addComp(cs.name, cs.width, cs.height, cs.pixel, cs.time, cs.frame);
currentComposition.openInViewer();
}

