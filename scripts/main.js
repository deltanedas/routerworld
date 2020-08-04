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

/* Override a variable from Tex.texname with router */
const override = (texname, regname) => {
	const tex = Tex[texname];
	const reg = Core.atlas.find("routerworld-" + regname);

	if (tex instanceof NinePatchDrawable) {
		tex.patch = new NinePatch(reg, 12, 12, 12, 12);
	} else if (tex instanceof TextureRegionDrawable) {
		Tex[texname].region = reg;
	}
};

const overrideArr = arr => {
	for (var i in arr) {
		var h = arr[i];
		override(h[0], h[1]);
	}
};

onEvent(ClientLoadEvent, () => {
	overrideArr([
		/* Colours are outer-inner */
		["alphaBg", "grey-trans"],
		["button", "grey-grey"],
		["buttonDisabled", "dark-dark"],
		["buttonTrans", "grey-trans"],
		["buttonRed", "red-grey"],
		["buttonDown", "white-grey"],

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

		["sliderKnob", "grey-grey"],
		["sliderKnobDown", "white-grey"],
		["sliderKnobOver", "yellow-yellow"],

		["cursor", "white-grey"]
	]);
});
