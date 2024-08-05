var dataSetForBasicData={
				"CoverPhoto": "background-image:url(images/cover-background.jpg);",
				"LogoOrProfilePhoto": "images/logo-image.jpg",
				"BrandNameOrPersonName": "Toys Store",
				"NavOrAddressBrandName": "Toys Store",
				"CallingNumber": "7310665592",
				"WhatsAppNumber":"7310665592",
				"EmailAddress": "yashsharmarocks7@gmail.com",
				"DirectionLink": "https://goo.gl/maps",
				"WebSiteLink": "",
				"BrandAddress": "Default Business address",
				"OurWebsiteURL":"Toys Store",
				"FollowLinkFacebook": "#!",
				"FollowLinkInstagram": "#!",
				"FollowLinkTwitter": "#!",
				"FollowLinkYouTube": "#!",
				"BrandAboutUs": "Welcome to a wonderland of joy and imagination at our Toys Store! Nestled in the heart of creativity, our store is a haven for children and the young at heart. As you step through our doors, be prepared to embark on a magical journey filled with laughter, excitement, and endless possibilities.Discover a vast array of toys that cater to every age, interest, and personality. From cuddly stuffed animals that are perfect companions for bedtime to cutting-edge tech toys that ignite curiosity and innovation, our shelves are adorned with a captivating selection. Engage in the nostalgia of classic board games that bring families together or dive into the future with state-of-the-art robotic wonders.",
				 "OpeningHours":"<h6><strong>MONDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>TUESDAY : </strong> 12:00 AM - 09:00 PM </h6>\
				 				<h6><strong>WEDNESDAY : </strong>Closed</h6>\
				 				<h6><strong>THURSDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>FRIDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>SATURDAY : </strong> 12:00 AM - 09:00 PM</h6>\
				 				<h6><strong>SUNDAY : </strong> 12:00 AM - 09:00 PM</h6>",
				"FeedbackReviewFirst":"best place for buying toys ",
				"FeedbackReviewSecond":"good staff",
				"FeedbackReviewThird":"best quality toys and craft items  toys store"
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
			//$(".jQClassForFeedbackReviewThird").html(dataSetForBasicData.FeedbackReviewThird);
		});