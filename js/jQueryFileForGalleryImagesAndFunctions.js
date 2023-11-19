//JS file to create gallery images and display functions.
var dataSetForGalleryImages = {
  ImagesInGallery: [
    {
      GalleryImage: {
        id: "1",
        name: "Registration",
        name: "Gallery Image 1",
        fileName: "1.jpg",
      },
    },
    {
      GalleryImage: {
        id: "2",
        name: "Gallery Image 2",
        fileName: "6.jpg",
      },
    },
    {
      GalleryImage: {
        id: "3",
        name: "Gallery Image 3",
        fileName: "7.jpg",
      },
    },
    {
      GalleryImage: {
        id: "4",
        name: "Gallery Image 4",
        fileName: "4.jpg",
      },
    },
    {
      GalleryImage: {
        id: "5",
        name: "Gallery Image 5",
        fileName: "5.jpg",
      },
    },
    {
      GalleryImage: {
        id: "6",
        name: "Gallery Image 6",
        fileName: "2.jpg",
      },
    },
    {
      GalleryImage: {
        id: "7",
        name: "Gallery Image 7",
        fileName: "3.jpg",
      },
    },
    //	{
    //		"GalleryImage": {
    //			"id": "8",
    //			"name": "Gallery Image 8",
    //			"fileName": "8.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage": {
    //			"id": "9",
    //			"name": "Gallery Image 9",
    //			"fileName": "9.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "10",
    //			"name": "Gallery Image 10",
    //			"fileName": "10.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "11",
    //			"name": "Gallery Image 11",
    //			"fileName": "11.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "12",
    //			"name": "Gallery Image 12",
    //			"fileName": "12.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "13",
    //			"name": "Gallery Image 13",
    //			"fileName": "13.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "14",
    //			"name": "Gallery Image 14",
    //			"fileName": "14.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "15",
    //			"name": "Gallery Image 15",
    //			"fileName": "15.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "16",
    //			"name": "Gallery Image 16",
    //			"fileName": "16.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "17",
    //			"name": "Gallery Image 17",
    //			"fileName": "17.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "18",
    //			"name": "Gallery Image 18",
    //			"fileName": "18.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "19",
    //			"name": "Gallery Image 19",
    //			"fileName": "19.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "20",
    //			"name": "Gallery Image 20",
    //			"fileName": "20.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "21",
    //			"name": "Gallery Image 21",
    //			"fileName": "21.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "22",
    //			"name": "Gallery Image 22",
    //			"fileName": "22.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "23",
    //			"name": "Gallery Image 23",
    //			"fileName": "23.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "24",
    //			"name": "Gallery Image 24",
    //			"fileName": "24.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "25",
    //			"name": "Gallery Image 25",
    //			"fileName": "25.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "26",
    //			"name": "Gallery Image 26",
    //			"fileName": "26.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "27",
    //			"name": "Gallery Image 27",
    //			"fileName": "27.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "28",
    //			"name": "Gallery Image 28",
    //			"fileName": "28.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "29",
    //			"name": "Gallery Image 29",
    //			"fileName": "29.jpg"
    //
    //		}
    //	},
    //	{
    //		"GalleryImage":
    //		{
    //			"id": "30",
    //			"name": "Gallery Image 30",
    //			"fileName": "30.jpg"
    //
    //		}
    //	},
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "31",
    //	 		"name": "Gallery Image 31",
    //	 		"fileName": "31.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "32",
    //	 		"name": "Gallery Image 32",
    //	 		"fileName": "32.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "33",
    //	 		"name": "Gallery Image 33",
    //	 		"fileName": "33.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "34",
    //	 		"name": "Gallery Image 34",
    //	 		"fileName": "34.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "35",
    //	 		"name": "Gallery Image 35",
    //	 		"fileName": "35.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "36",
    //	 		"name": "Gallery Image 36",
    //	 		"fileName": "36.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "37",
    //	 		"name": "Gallery Image 37",
    //	 		"fileName": "37.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "38",
    //	 		"name": "Gallery Image 38",
    //	 		"fileName": "38.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "39",
    //	 		"name": "Gallery Image 39",
    //	 		"fileName": "39.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "40",
    //	 		"name": "Gallery Image 40",
    //	 		"fileName": "40.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "41",
    //	 		"name": "Gallery Image 41",
    //	 		"fileName": "41.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "42",
    //	 		"name": "Gallery Image 42",
    //	 		"fileName": "42.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "43",
    //	 		"name": "Gallery Image 43",
    //	 		"fileName": "43.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "44",
    //	 		"name": "Gallery Image 44",
    //	 		"fileName": "44.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "45",
    //	 		"name": "Gallery Image 45",
    //	 		"fileName": "45.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "46",
    //	 		"name": "Gallery Image 46",
    //	 		"fileName": "46.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "47",
    //	 		"name": "Gallery Image 47",
    //	 		"fileName": "47.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "48",
    //	 		"name": "Gallery Image 48",
    //	 		"fileName": "48.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "49",
    //	 		"name": "Gallery Image 49",
    //	 		"fileName": "49.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "50",
    //	 		"name": "Gallery Image 50",
    //	 		"fileName": "50.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "51",
    //	 		"name": "Gallery Image 51",
    //	 		"fileName": "51.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "52",
    //	 		"name": "Gallery Image 52",
    //	 		"fileName": "52.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "53",
    //	 		"name": "Gallery Image 49",
    //	 		"fileName": "53.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "54",
    //	 		"name": "Gallery Image 50",
    //	 		"fileName": "54.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "55",
    //	 		"name": "Gallery Image 51",
    //	 		"fileName": "55.jpg"
    //
    //	 	}
    //	 },
    //	 {
    //	 	"GalleryImage":
    //	 	{
    //	 		"id": "56",
    //	 		"name": "Gallery Image 52",
    //	 		"fileName": "56.jpg"
    //
    //	 	}
    //	 },
  ],
};
jQuery(document).ready(function () {
  //Start Code written by Vivek on 27-04-2023 for looping in gallery images
  OBJForGalleryImages = {};
  OBJForGalleryImages.apply = function (dataSetForGalleryImages) {
    $.each(dataSetForGalleryImages, function () {
      $.each(this, function (key, value) {
        var htmlDataForImageGallery = "<div class='swiper-slide'><Img src='/images/GalleryImage/"+ value.GalleryImage.fileName  +"'</div>";
		$(".swiper-wrapper").append(htmlDataForImageGallery);

		
        // htmlDataForImageGallery = htmlDataForImageGallery + "<img src='images/GalleryImage/" + value.GalleryImage.fileName + "' alt='graphy-" + value.GalleryImage.id + "' height='250px' width='100%'></a><div class='modal fade' id='myModal" + value.GalleryImage.id + "'>";
        // htmlDataForImageGallery = htmlDataForImageGallery + "<div class='modal-dialog modal-dialog-centered'><div class='modal-content bg-transparent'><div class='modal-body text-right'>";
        // htmlDataForImageGallery = htmlDataForImageGallery + "<a href='#!' class='anchor-crossmark'><i class='fa-solid fa-xmark' data-dismiss='modal'></i></a>";
        // htmlDataForImageGallery = htmlDataForImageGallery + "<img src='images/GalleryImage/" + value.GalleryImage.fileName + "' alt='graphy-1' height='auto' width='100%'> </div> </div></div></div></div>";

        // $(".templateClassForGalleryImage").append(htmlDataForImageGallery);
        // $(".templateClassForGalleryImage").attr(htmlDataForImageGallery);

	});
    });
  };
  OBJForGalleryImages.apply(dataSetForGalleryImages);
});
