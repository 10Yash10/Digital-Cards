var dataSetForBasicData={
				"CoverPhoto": "background-image:url(images/cover-image.jpg);border-bottom:.3vw solid black;",
				"LogoOrProfilePhoto": "images/brand-image-logo.jpg",
				"BrandNameOrPersonName": "<h1><strong>Sumitar Bhullar</strong><br></h1><h2><strong>Youth Congress</strong></h2>",
				"NavOrAddressBrandName": "Dadarpur",
				"CallingNumber": "09720660033",
				//"LandlineCallingNumber": "01145642276",
				"WhatsAppNumber":"09720660033",
				"EmailAddress": "sumitar.bhullar1988@gmail.com",
				"DirectionLink": "",
				"WebSiteLink": "#!",
				"BrandAddress": "Uttrakhand, India",
				"OurWebsiteURL":"Indian-Youth-Congress",
				"FollowLinkFacebook": "https://www.facebook.com/Sumittar.Bhullar1988/",
				"FollowLinkInstagram": "#!",
				"FollowLinkTwitter": "#!",
				"FollowLinkYouTube": "#!",
				"BrandAboutUs": "The Indian Youth Congress is the youth wing of the Indian National Congress party. The Indian Youth Congress was a department of the Indian National Congress from the period just after the Partition of India in 1947 until the late 1960s. While prime minister, Indira Gandhi gave the Youth Congress a new dimension by establishing it as a frontal organisation of the Congress Party, with the objective of doing social work and arguing against right-wing parties. Priya Ranjan Dasmunsi was the first elected president of the Indian Youth Congress; Chandy Oommen was the National outreach Chairman.<br><br>he later became Minister of Information and Broadcasting and Parliamentary affairs in the Indian cabinet. Narayan Dutt Tiwari was the first President. Jitin Prasada was also the president of the Indian youth congress.<br><br>During the 1970s, under the leadership of Sanjay Gandhi, the Youth Congress undertook activities such as tree plantation, family planning, and fought against domestic violence and dowry deaths. After the death of Sanjay Gandhi, Rajiv Gandhi took over in charge of the Youth Congress. After he became prime minister in 1984, Rajiv Gandhi reduced the voting age to 18. Rahul Gandhi was appointed a general secretary of the All India Congress Committee on 24 September 2007 and was given charge of the Indian Youth Congress[4] along with the National Students Union of India.<br><br>The Indian Youth Congress has its headquarters in New Delhi and is headed by Srinivas BV. There are 39 office bearers at the national level, followed by the state, Loksabha, Assembly and Booth level. In all, 174,000 committees have been formed at the Booth level.",
				"OpeningHours":"<h6><strong>MONDAY : </strong> 10:00 AM - 06:00 PM</h6>\
								<h6><strong>TUESDAY : </strong> 10:00 AM - 06:00 PM </h6>\
								<h6><strong>WEDNESDAY : </strong> 10:00 AM - 06:00 PM</h6>\
								<h6><strong>THURSDAY : </strong> 10:00 AM - 06:00 PM</h6>\
								<h6><strong>FRIDAY : </strong> 10:00 AM - 06:00 PM</h6>\
								<h6><strong>SATURDAY : </strong> 10:00 AM - 06:00 PM</h6>\
								<h6><strong>SUNDAY : </strong> Closed </h6>",
				"FeedbackReviewFirst":"Youth Congress helped our team.",
				"FeedbackReviewSecond":"I really liked the way they cooperate teams to complete tasks",
				"FeedbackReviewThird":"Extremely happy the way we interacted. Trust me he is worth spending time with. Highly recommended."
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

			// landline number
			$(".jQClassForLandlinePhoneNumberAnchor").attr("href","tel:"+dataSetForBasicData.LandlineCallingNumber+"");
			$(".jQClassForLandlinePhoneNumber").html(""+dataSetForBasicData.LandlineCallingNumber);

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