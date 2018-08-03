// you have 50 trucks and you want to see how far you can deliver one package, the idea is to siphon fuel from other trucks to go the farther distance

function truckDistance(trucks) {
	let fleet = trucks - 1;
	let miles = 0;
	while (fleet >= 0) {
		miles += 100 / (fleet + 1);
		fleet -= 1;
	}
	return miles;
}

truckDistance(50); 