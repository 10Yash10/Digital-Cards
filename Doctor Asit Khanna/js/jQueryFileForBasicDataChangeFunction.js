const dataSetForBasicData = {
    "coverBackground":"background-image:url(images/cover-banner.jpg);",
    "logo":"images/logo-image2.png",
    "title":"Dr. Asit Khanna",
    "subTitle":"MD, DM, FACC, FESC, FAPSIC, FSCAI,FISC, FICP",
    "callingNumber":"9818882958",
    "callingSecondNumber":"91-120-4156644",
    "whatsappNumber":"9818882958",
    "sms":"9818882958",
    "email":"drasitkhanna@yahoo.co.in",
    "secondEmail":"asit.khanna@rediffmail.com",
    "direction":"https://www.google.com/maps/place/Navjeevan+Cardiac+Center/@28.6762278,77.4736256,21z/data=!4m14!1m7!3m6!1s0x390cf34e2e6dfde1:0x892aed077c7796f2!2sUDGAM+Play+School!8m2!3d28.6761263!4d77.4737304!16s%2Fg%2F11j2w4kd4k!3m5!1s0x390cf226d2c494f5:0x37746967304d1029!8m2!3d28.676316!4d77.4736545!16s%2Fg%2F11ckq_07sr?entry=ttu",
    "website":"https://cardiologistinghaziabad.com",
    "secondWebsite":"https://drasitkhanna.in/",
    "directionText":"SE-12,<br> Near UDGAM Play School,<br> Shastri Nagar Ghaziabad UP 201002",
    "linkedin":"https://www.linkedin.com/company/dr-asit-khanna/",
    "instagram":"https://www.instagram.com/drasitkhanna_/",
    "facebook":"https://www.facebook.com/drasitkhanna",
    "twitter":"https://twitter.com/_drasitkhanna",
};

$(document).ready(()=>{
    $(".jQueryCoverBackground").attr("style",dataSetForBasicData.coverBackground);
    $(".jQueryLogo").attr("src",dataSetForBasicData.logo);
    $(".jQueryTitle").html(dataSetForBasicData.title);
    $(".jQuerySubTitle").html(dataSetForBasicData.subTitle);
    $(".jQueryCallingNumber").attr("href","tel:+91 "+ dataSetForBasicData.callingNumber);
    $(".jQueryCallingNumber span").attr("href","tel:+91 "+ dataSetForBasicData.callingNumber).html(dataSetForBasicData.callingNumber + ",<br>");
    $(".jQueryCallingSecondNumber").attr("href","tel:+01" + dataSetForBasicData.callingSecondNumber);
    $(".jQueryCallingSecondNumber span").attr("href","tel:+01" + dataSetForBasicData.callingSecondNumber).html(dataSetForBasicData.callingSecondNumber);
    $(".jQueryWhatsappNumber").attr({
        href:"https://api.whatsapp.com/send/?phone=" + dataSetForBasicData.whatsappNumber + "&text&type=phone_number&app_absent=0",
        target:"_blank",
        rel:"nofollow noopener"
    });
    $(".jQueryEmail").attr("href","mailto:" + dataSetForBasicData.email);
    $(".jQueryEmail span").attr("href","mailto:" + dataSetForBasicData.email).html(dataSetForBasicData.email );
    $(".jQuerySecondEmail").attr("href","mailto:" + dataSetForBasicData.secondEmail);
    $(".jQuerySecondEmail span").attr("href","mailto:" + dataSetForBasicData.secondEmail).html(dataSetForBasicData.secondEmail + ",<br>");
    $(".jQueryDirection").attr("href",dataSetForBasicData.direction);
    $(".jQueryWebsite").attr({
        href:dataSetForBasicData.website,
        target:"_blank",
        rel:"nofollow noopener"
    });
    $(".jQuerySms").attr("href","sms:+91" + dataSetForBasicData.sms);
    $(".jQueryDirectionText").html(dataSetForBasicData.directionText);
    $(".jQueryLinkedin").attr({
        href:dataSetForBasicData.linkedin,
        target:"_blank",
        rel:"nofollow noopener"
    });
    $(".jQueryInstagram").attr({
        href:dataSetForBasicData.instagram,
        target:"_blank",
        rel:"nofollow noopener"
    });
    $(".jQueryFacebook").attr({
        href:dataSetForBasicData.facebook,
        target:"_blank",
        rel:"nofollow noopener"
    });
    $(".jQueryTwitter").attr({
        href:dataSetForBasicData.twitter,
        target:"_blank",
        rel:"nofollow noopener"
    });
    $(".jQuerySecondWebsite").attr({
        href:dataSetForBasicData.secondWebsite,
        target:"_blank",
        rel:"nofollow noopener"
    });
});