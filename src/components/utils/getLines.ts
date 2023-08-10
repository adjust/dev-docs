/*
This function:
* Takes the range from the getInfoFromUrl function
* Checks if the value is separated by a hyphen
  * Returns the content at the line number if the range contains only a single number
* Converts the value to numbers and stores the beginning and end of the range if a hyphen is found
* Returns the content between the range values
*/

export function getLines(
  responseContent: string[],
  range: string,
): string | undefined {
  if (range.includes("-")) {
    var a = Number(range.split("-")[0]) - 1;
    var b = Number(range.split("-")[1]);
    return responseContent.slice(a, b).join("\r\n");
  } else if (parseInt(range)) {
    return responseContent[parseInt(range) - 1];
  }
}
