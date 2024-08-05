//JS file to create gallery images and display functions.
var dataSetForGalleryImages = {
  ImagesInGallery: [
    {
      GalleryImage: {
        id: "1",
        name: "",
        fileName: "1.jpeg",
      },
    },
    {
      GalleryImage: {
        id: "2",
        name: "",
        fileName: "2.jpeg",
      },
    },
    {
      GalleryImage: {
        id: "3",
        name: "",
        fileName: "3.jpeg",
      },
    },
    {
      GalleryImage: {
        id: "4",
        name: "",
        fileName: "4.jpeg",
      },
    },
    {
      GalleryImage: {
        id: "5",
        name: "",
        fileName: "5.jpeg",
      },
    },
    {
      GalleryImage: {
        id: "6",
        name: "",
        fileName: "6.jpeg",
      },
    },
    {
      GalleryImage: {
        id: "7",
        name: "",
        fileName: "7.jpeg",
      },
    },

    {
      GalleryImage: {
        id: "8",
        name: "",
        fileName: "8.jpeg",
      },
    },

    {
      GalleryImage: {
        id: "9",
        name: "",
        fileName: "9.jpeg",
      },
    },
    // {
    //   GalleryImage: {
    //     id: "10",
    //     name: "",
    //     fileName: "10.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "11",
    //     name: "",
    //     fileName: "11.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "12",
    //     name: "",
    //     fileName: "12.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "13",
    //     name: "",
    //     fileName: "13.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "14",
    //     name: "",
    //     fileName: "14.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "15",
    //     name: "",
    //     fileName: "15.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "16",
    //     name: "",
    //     fileName: "16.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "17",
    //     name: "",
    //     fileName: "17.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "18",
    //     name: "",
    //     fileName: "18.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "19",
    //     name: "",
    //     fileName: "19.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "20",
    //     name: "",
    //     fileName: "20.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "22",
    //     name: "",
    //     fileName: "22.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "23",
    //     name: "",
    //     fileName: "23.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "24",
    //     name: "",
    //     fileName: "24.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "25",
    //     name: "",
    //     fileName: "25.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "26",
    //     name: "",
    //     fileName: "26.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "27",
    //     name: "",
    //     fileName: "27.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "28",
    //     name: "",
    //     fileName: "28.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "29",
    //     name: "",
    //     fileName: "29.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "30",
    //     name: "",
    //     fileName: "30.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "31",
    //     name: "",
    //     fileName: "31.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "32",
    //     name: "",
    //     fileName: "32.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "33",
    //     name: "",
    //     fileName: "33.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "34",
    //     name: "",
    //     fileName: "34.jpeg",
    //   },
    // },
    // {
    //   GalleryImage: {
    //     id: "35",
    //     name: "",
    //     fileName: "35.jpeg",
    //   },
    // },
    //			,
    //			{
    //				"GalleryImage":
    //				{
    //					"id": "36",
    //					"name": "",
    //					"fileName": "36.jpeg"
    //
    //				}
    //			}
    //			,
    //			{
    //				"GalleryImage":
    //				{
    //					"id": "37",
    //					"name": "",
    //					"fileName": "37.jpeg"
    //
    //				}
    //			}
    //
  ],
};
jQuery(document).ready(function () {
  //Start Code written by Vivek on 27-04-2023 for looping in gallery images
  OBJForGalleryImages = {};
  OBJForGalleryImages.apply = function (dataSetForGalleryImages) {
    $.each(dataSetForGalleryImages, function () {
      $.each(this, function (key, value) {
        // var htmlDataForImageGallery="<div class='col-12 col-lg-3 col-md-4 col-sm-6 mb-3'><a href='#!' class='starting-gallery' data-toggle='modal' data-target='#myModal"+ value.GalleryImage.id +"'>";
        // htmlDataForImageGallery=htmlDataForImageGallery+"<img src='images/GalleryImage/"+value.GalleryImage.fileName+"' alt='graphy-"+ value.GalleryImage.id +"' height='250px' width='100%'></a><div class='modal fade' id='myModal"+ value.GalleryImage.id +"'>";
        // htmlDataForImageGallery=htmlDataForImageGallery+"<div class='modal-dialog modal-dialog-centered'><div class='modal-content bg-transparent'><div class='modal-body text-right'>";
        // htmlDataForImageGallery=htmlDataForImageGallery+"<a href='#!' class='anchor-crossmark'><i class='fa-solid fa-xmark' data-dismiss='modal'></i></a>";
        // htmlDataForImageGallery=htmlDataForImageGallery+"<img src='images/GalleryImage/"+value.GalleryImage.fileName+"' alt='graphy-1' height='auto' width='100%'> </div> </div></div></div></div>";
        var htmlDataForImageGallery =
          "<div class='swiper-slide'><Img src='images/GalleryImage/" +
          value.GalleryImage.fileName +
          "'</div>";
        $(".swiper-wrapper").append(htmlDataForImageGallery);
        $(".templateClassForGalleryImage").append(htmlDataForImageGallery);
      });
    });
  };
  OBJForGalleryImages.apply(dataSetForGalleryImages);
});
