import typiaTransform from "typia/lib/transform";

if (typeof typiaTransform === "function") {
  console.log("works");
} else {
  console.log("typia/lib/transform is not a function:", typiaTransform);
}
