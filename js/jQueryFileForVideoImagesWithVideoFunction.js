//JS file to create Video Images and display functions.
var dataSetForVideoImages = {
	"ImagesInVideo": [{
		"VideoImages": {
			"id": "1",
			"name": "Video Images 1",
			"fileName": "1.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "2",
			"name": "Video Images 2",
			"fileName": "2.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "3",
			"name": "Video Images 3",
			"fileName": "3.jpg"

		}
	},
	{
		"VideoImages": {
			"id": "4",
			"name": "Video Images 4",
			"fileName": "4.jpg"

		}
	},
	{
		"VideoImages": {
			"id": "5",
			"name": "Video Images 5",
			"fileName": "5.jpg"

		}
	},
	{
		"VideoImages": {
			"id": "6",
			"name": "Video Images 6",
			"fileName": "6.jpg"

		}
	},
	{
		"VideoImages": {
			"id": "7",
			"name": "Video Images 7",
			"fileName": "7.jpg"

		}
	},
	{
		"VideoImages": {
			"id": "8",
			"name": "Video Images 8",
			"fileName": "8.jpg"

		}
	},
	{
		"VideoImages": {
			"id": "9",
			"name": "Video Images 9",
			"fileName": "9.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "10",
			"name": "Video Images 10",
			"fileName": "10.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "11",
			"name": "Video Images 11",
			"fileName": "11.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "12",
			"name": "Video Images 12",
			"fileName": "12.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "13",
			"name": "Video Images 13",
			"fileName": "13.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "14",
			"name": "Video Images 14",
			"fileName": "14.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "15",
			"name": "Video Images 15",
			"fileName": "15.jpg"

		}
	},
	{
		"VideoImages":
		{
			"id": "16",
			"name": "Video Images 16",
			"fileName": "16.jpg"

		}
	},

	]
}
jQuery(document).ready(function () {

	//Start Code written by Jatin on 08-05-2023 for looping in Video Imagess		
	OBJForVideoImages = {};
	OBJForVideoImages.apply = function (dataSetForVideoImages) {
		$.each(dataSetForVideoImages, function () {
			$.each(this, function (key, value) {

				var htmlDataForImagesVideo = "<div class='col-12 col-lg-3 col-md-4 col-sm-6 mb-3'>";
                htmlDataForImagesVideo = htmlDataForImagesVideo + "<a href='video/"+value.VideoImages.id+".mp4' class='starting-gallery'>";
                htmlDataForImagesVideo = htmlDataForImagesVideo + "<img src='images/VideoImage/"+value.VideoImages.id+".jpg' alt='video-image-"+value.VideoImages.id+"' height='250px' width='100%'></a></div>";

				$(".templateClassForVideoImages").append(htmlDataForImagesVideo);
			});
		});

	}
	OBJForVideoImages.apply(dataSetForVideoImages);

});