import { assertEquals } from "https://deno.land/std@0.203.0/assert/assert_equals.ts";

import {is_adm} from "../ont/adm.ts"

Deno.test("adm", () => {
	assertEquals([true, false, false, true], [
		is_adm("江苏", "苏州"),
		is_adm("江苏", "成都"),
		is_adm("四川", "苏州"),
		is_adm("四川", "成都"),
	])
})
