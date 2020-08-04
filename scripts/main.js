/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const d = [
	/*l, r,  t,  b */
	[12, 12, 12, 12],
	[0, 32, 0, 32],
	[0, 32, 0, 32],
	[0, 32, 0, 32]
];

/* Override a variable from Tex.texname with router */
const override = (texname, regname, i) => {
	const tex = Tex[texname];
	const reg = Core.atlas.find("routerworld-" + regname);

	if (tex instanceof NinePatchDrawable) {
		tex.patch = new NinePatch(reg, d[i][0], d[i][1], d[i][2], d[i][3]);
	} else if (tex instanceof TextureRegionDrawable) {
		tex.region = reg;
	}
};

const overrideArr = arr => {
	for (var i in arr) {
		var h = arr[i];
		override(h[0], h[1], h[2] || 0);
	}
};

Events.on(ClientLoadEvent, _ => {
	overrideArr([
		/* Colours are outer-inner */
		["button", "grey-grey"],
		["buttonDisabled", "dark-dark"],
		["buttonTrans", "grey-trans"],
		["buttonRed", "red-grey"],
		["buttonDown", "white-grey"],
		["buttonOver", "yellow-grey"],

		["buttonEdge1", "grey-grey", 1],
		["buttonEdge2", "grey-grey", 1],
		["buttonEdge3", "grey-grey", 2],
		["buttonEdge4", "grey-grey", 3],

		["buttonEdgeOver1", "yellow-grey", 1],
		["buttonEdgeOver2", "yellow-grey", 1],
		["buttonEdgeOver3", "yellow-grey", 2],
		["buttonEdgeOver4", "yellow-grey", 3],

		["buttonSquare", "yellow-none"],
		["buttonSelect", "yellow-grey"],

		["checkDisabled", "dark-dark"],
		["checkOnDisabled", "dark-grey"],
		["checkOff", "grey-grey"],
		["checkOver", "yellow-grey"],
		["checkOn", "grey-yellow"],
		["checkOnOver", "yellow-grey"],

		["flatDownBase","yellow-trans"],
		["inventory", "grey-grey"],

		["scroll", "grey-grey"],
		["sliderKnob", "grey-grey"],
		["sliderKnobDown", "white-grey"],
		["sliderKnobOver", "yellow-yellow"],

		["cursor", "white-grey"],
		["whiteui", "white-white"]
	]);
});
