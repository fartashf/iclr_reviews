var submissionId = 1;
var divComments = $("cs_" + submissionId);
divComments.innerHTML = '';
divComments.parentNode.style.display = "block";

function MyWriteContent(text)
{
    var divComments = $("cs_" + submissionId);
    curtext = divComments.innerHTML;
    divComments.innerHTML = curtext+'\n'+text;
    divComments.parentNode.style.display = "block";
}
function MyReviewReceived(arg, context)
{
    console.log(context);
    MyWriteContent('Submission Id: '+context+'\n'+arg);
}

var valid_ids = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 26, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 40, 41, 43, 44, 45, 47, 48, 49, 50, 52, 53, 54, 56, 57, 58, 59, 60, 62, 63, 64, 67, 68, 69, 71, 72, 73, 74, 75, 76, 78, 80, 82, 83, 85, 86, 87, 88, 89, 92, 93, 96, 98, 99, 100, 101, 103, 106, 108, 109, 110, 111, 112, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 125, 126, 127, 128, 130, 133, 134, 135, 136, 137, 138, 140, 141, 142, 144, 145, 148, 149, 150, 151, 152, 154, 155, 156, 157, 159, 160, 162, 163, 165, 168, 169, 170, 171, 172, 174, 176, 178, 179, 180, 181, 182, 183, 185, 186, 188, 189, 190, 192, 194, 195, 196, 200, 201, 203, 204, 205, 207, 209, 210, 212, 213, 215, 216, 218, 219, 221, 222, 223, 225, 226, 227, 229, 230, 231, 233, 236, 237, 238, 239, 240, 244, 245, 246, 247, 249, 250, 252, 254, 257, 258, 259, 260, 261, 262, 263, 264, 266, 267, 268, 269, 270, 272, 273, 274, 276, 277, 279, 280, 281, 282, 283, 284, 285, 287, 288, 290, 292, 293, 294, 296, 299, 300, 301, 302, 303, 305, 306, 307, 309, 310, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 324, 325, 327, 329, 332, 334, 335, 337, 338, 339, 340, 344, 345, 346, 347]);

var done_ids = new Set([]);

for(i=1; i<=347; i++){
    if (!valid_ids.has(i) || done_ids.has(i)) continue;
    WebForm_DoCallback('__Page','showreview '+i,MyReviewReceived,i,true,true);
    k=0;
    for(j=1; j<=1000*1000; j++){k+=10;}
    console.log('here '+i);
}
