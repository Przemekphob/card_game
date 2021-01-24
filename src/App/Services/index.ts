
import axios from "axios";
import { PeopleAttributesResponseType, StarshipsAttributesResponseType } from "../Types";

export default async function getResourceData(resource: string, next: string | null): Promise<PeopleAttributesResponseType | StarshipsAttributesResponseType> {
	const defaultPath = `https://swapi.dev/api/${resource}`;
	const path = next === null ? defaultPath : next;
	try {
		const response = await axios.get(path);
		return response.data;
	} catch (error) {
		return error;
	}
}
