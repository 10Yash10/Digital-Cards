var dataSetForBasicData={
				"CoverPhoto": "background-image:url(images/cover-background.jpg);",
				"LogoOrProfilePhoto": "images/logo-image.jpg",
				"BrandNameOrPersonName": " Home Shop",
				"NavOrAddressBrandName": " Home Shop",
				"CallingNumber": "7310665592",
				"WhatsAppNumber":"7310665592",
				"EmailAddress": "yashsharmarocks7@gmail.com",
				"DirectionLink": "https://goo.gl/maps",
				"WebSiteLink": "",
				"BrandAddress": "Default Business address",
				"OurWebsiteURL":" Home Shop",
				"FollowLinkFacebook": "#!",
				"FollowLinkInstagram": "#!",
				"FollowLinkTwitter": "#!",
				"FollowLinkYouTube": "#!",
				"BrandAboutUs": "A home appliances and household goods store is a haven for domestic needs. This one-stop shop offers a diverse range of essential items, from kitchen appliances and cookware to cleaning supplies and organizational tools. With a curated selection of reliable brands, it caters to homemakers, DIY enthusiasts, and anyone looking to enhance their living space. From efficient appliances that simplify daily chores to stylish and functional household items, this store provides the tools for creating a comfortable and well-equipped home. Knowledgeable staff often assist customers in navigating the array of choices, ensuring they find the right solutions for their specific needs. Whether upgrading a kitchen, revamping the cleaning routine, or enhancing home organization, this store is a go-to destination for all things home-related, combining practicality with style. ",
				 "OpeningHours":"<h6><strong>MONDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>TUESDAY : </strong> 12:00 AM - 09:00 PM </h6>\
				 				<h6><strong>WEDNESDAY : </strong>Closed</h6>\
				 				<h6><strong>THURSDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>FRIDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>SATURDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>SUNDAY : </strong> 12:00 AM - 09:00 PM</h6>",
				"FeedbackReviewFirst":"best place for buying Home Shops goods",
				"FeedbackReviewSecond":"good staff",
				"FeedbackReviewThird":"best products"
			}
$(document).ready(function(){
			// Code Written by Jatin 08-05-2023 for Cover Photo 
			$(".jQClassForCoverPhoto").attr("style",dataSetForBasicData.CoverPhoto);
			//alert(dataSetForBasicData.BrandName);
			$(".jQClassForProfileImage").attr("src",dataSetForBasicData.LogoOrProfilePhoto);
			// Code Change by Jatin 05-05-2023 for Brand Name
			$(".jQClassForBrandNameOrPersonName").html(dataSetForBasicData.BrandNameOrPersonName);
			// Code Change by Jatin 05-05-2023 for Person Name
			
			$(".jQClassForNavOrAddressBrandName").html(dataSetForBasicData.NavOrAddressBrandName);
			
			$(".jQClassForBrandName").attr("href","tel:+91 "+dataSetForBasicData.CallingNumber+"");
			//alert($(".jQClassForProfileImage").attr("src"));
			//href="https://api.whatsapp.com/send/?phone=918077579103&text&type=phone_number&app_absent=0"
			$(".jQClassForWhatsAPPNumber").attr("href","https://api.whatsapp.com/send/?phone=91"+dataSetForBasicData.WhatsAppNumber+"&text&type=phone_number&app_absent=0");
			// Code Start Written by Jatin 05-05-2023 for Contact section Our Website Url Send Whatsapp to Our Contact list
			$(".jQClassForWhatsAPPNumberWithURL").attr("href","https://wa.me/?text=https%3A%2F%2Fdizibharat.com%2F"+dataSetForBasicData.OurWebsiteURL+"");
			// Code Start Written by Jatin 05-05-2023 for Contact section Our Website Url Send Message to Our Contact list
			$(".jQClassForMessageNumberWithURL").attr("href","sms:?&body=https%3A%2F%2Fdizibharat.com%2F"+dataSetForBasicData.OurWebsiteURL+"");
			//href="mailto:Shivalikhomestay1@gmail.com"
			$(".jQClassForEmailAddress").attr("href","mailto:"+dataSetForBasicData.EmailAddress+"");
			//href="https://goo.gl/maps/WQkzvw1CQAffWh6o6"
			$(".jQClassForDirection").attr("href",dataSetForBasicData.DirectionLink);
			//href="https://www.goibibo.com/hotels/shivalik-homestay-hotel-in-nainital-276143246269797125/"
			$(".jQClassForWebSite").attr("href",dataSetForBasicData.WebSiteLink);
			//href="sms:+91 8077579103"
			$(".jQClassForMessageNumber").attr("href","sms:+91 "+dataSetForBasicData.CallingNumber+"");
			// code change by Jatin 05-05-2023 for address with brand Name
			$(".jQClassForFullAddress").html(""+ dataSetForBasicData.NavOrAddressBrandName+", "+ dataSetForBasicData.BrandAddress+"");
			//href="tel:+91 8077579103"
			$(".jQClassForPhoneNumberAnchor").attr("href","tel:+91 "+dataSetForBasicData.CallingNumber+"");
			$(".jQClassForPhoneNumber").html("+91 "+dataSetForBasicData.CallingNumber);
			$(".jQClassForEmailAddressValue").html(dataSetForBasicData.EmailAddress);
			//href="https://www.instagram.com/shivalikhomestay1/"
			$(".jQClassForFollowButton").attr("href",dataSetForBasicData.FollowLinkInstagram);
			// facebook profile link
			$(".jQClassForFacebookProfileButton").attr("href",dataSetForBasicData.FollowLinkFacebook);
			// instagram profile link
			$(".jQClassForInstagramProfileButton").attr("href",dataSetForBasicData.FollowLinkInstagram);
			// youtube profile link
			$(".jQClassForYoutubeProfileButton").attr("href",dataSetForBasicData.FollowLinkYouTube);
			// twitter profile link
			$(".jQClassForTwitterProfileButton").attr("href",dataSetForBasicData.FollowLinkTwitter);
			// about us
			$(".jQClassForAboutUS").html(dataSetForBasicData.BrandAboutUs);
			// opening hours
			 $(".jQClassForOpeningHours").html(dataSetForBasicData.OpeningHours);
			// feedback Review
			$(".jQClassForFeedbackReviewFirst").html(dataSetForBasicData.FeedbackReviewFirst);
			$(".jQClassForFeedbackReviewSecond").html(dataSetForBasicData.FeedbackReviewSecond);
			$(".jQClassForFeedbackReviewThird").html(dataSetForBasicData.FeedbackReviewThird);
		});