import { createClient } from "next-sanity";
import imageUrlBuiler from "@sanity/image-url";

export const client = createClient({
    apiVersion: "2023-03-01",
    dataset:"production",
    projectId: "x43til9e",
    useCdn: false,
})

const builder = imageUrlBuiler(client);

export const urlFor = (source) => builder.image(source);