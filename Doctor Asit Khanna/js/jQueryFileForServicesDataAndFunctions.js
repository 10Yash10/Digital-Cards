//JS file to create services images and tab functions.
var data = {
  productsInServices: [
    {
      product: {
        id: "1",
        name: "TEACHING ACTIVITES",
        logoURL: "/images/Services/1.jpg",
        fileName: "1.jpg",
        CategoryTypeId: "1",
        description: `
						<b>•3 years teaching experience as Senior Resident (cardiology)</b> in G.B. Pant Hospital 2001 to 2004.<br>
						<b>•Regional Faculty</b> for International Program, American Guild For Physicians CME and ASCME 2015.<br>
						•<b>Regional faculty</b> for training in certificate course on Management of HT by International society of HT/British HT Society/CCDCPHFI 2017-18<br>
						•<b>Co guide to DNB General Medicine thesis dissertation</b> of Dr Anugrah Raj Mathur (2016-2019) on “ABPM monitoring in patients with Diabetes Mellitus” 
					`,
        price: 2500,
      },
    },
    {
      product: {
        id: "2",
        name: "HOSPITAL COMMITTEE APPOINTMENTS ",
        logoURL: "/images/Services/1.jpg",
        fileName: "1.1.jpg",
        CategoryTypeId: "2",
        description:
					`
						•	Clinical Program Coordinator, Dept Of Cardiology<br>
						•	ECMO Team<br>
						•	Code Blue Committee<br>
						•	Mortality Committee<br>
						•	Radiation safety and monitoring Board<br>
						•	Hospital Infection Control Committee<br>

					`,
        price: 2500,
      },
    },
    {
      product: {
        id: "3",
        name: "HONOURS AND AWARDS",
        logoURL: "/images/Services/1.jpg",
        fileName: "1b.jpg",
        CategoryTypeId: "3",
        description:
          			`
						•	Winner of The Thapar Scholarship of 5000 Rs/yr for duration of MBBS 1992-1996<br>
						•	Winner of Third prize in Symposium on TB, IMA Varanasi, 1999<br>
						•	Winner of All India Glaxo Wellcome - IJCP Essay competition on Hepatitis B in 2000.<br>
						•	Distinguished Alumnus award from G.B. Pant Hospital and MAMC, Delhi 2015.<br>
						•	Appreciation Award in UP Cardiac Institutes Alumni meet, Delhi 2015<br>
            <div class="toggle-text">
						•	Recipient of the <b>ICONS OF HEALTHCARE</b> award by Times Of India, Meerut 2019<br>
						•	Recipient of the <b>SEWA RATNA</b> award by <b>Govt Of Uttarakhand</b>, 2020.<br>
						•	Corona warrior award from Shipra Kalyan Samiti, Uttarakhand, 2020<br>
						•	Corona warrior award from Vaishnavi Sewa Sansthan, Aligarh 2020<br>
						•	Corona warrior award by Ghaziabad Management Association, Ghaziabad 2021<br>
            </div>
            <button id="1" class="toggle-lines d-flex"><i class="fa fa-angle-down mx-1"></i><span>View More</span></button>
					`,
        price: 2500,
      },
    },
    {
      product: {
        id: "4",
        name: "FELLOWSHIPS AND SOCIETY MEMBERSHIPS",
        logoURL: "/images/Services/1.jpg",
        fileName: "1.3.jpg",
        CategoryTypeId: "4",
        description:
          			`
						<b>1. Fellow of the American College Of Cardiology(FACC)<br>
						2. Fellow of the Society for Cardiovascular Angiography and Intervention (FSCAI)<br>
						3. Fellow of the Asian Pacific Society Of Cardiovascular Intervention (FAPSIC)<br>
						4. Fellow of the European Society Of Cardiology(FESC)<br>
						5. Fellow of the Indian Society Of Cardiology(FISC)<br>

            <div class="toggle-text">
              6. Fellow of the Indian College Of Physicians (FICP)</br><br>
              7. Cardiological Society Of India (Life Member)<br>
              8. Indian College Of Cardiology ( Life member)<br>
              9. International Society Of Endovascular Specialists (Life Member)<br>
              10. Asia Pacific Vascular Society (Life Member)<br>
              11. Heart Rhythm Society (USA)(Member)<br>
              12. Indian Heart Rhythm Society (Member)<br>
              13. American College Of  Physicians (Life Member)<br>
              14. European Association Of Cardiovascular Imaging (EACVI)(member)<br>
              15. European Association Of Percutaneous Coronary Intervention (EAPCI) (member)      <br>
              16. International Society of Cardiovascular Pharmacotherapy (ISCP)(member)<br>
              17. Ghaziabad Cardiology Forum (Founder & Life Member)<br>
              18. Association Of Physicians Of India (Life Member)      <br>   
              19. Research Society for the Study of Diabetes in India (Life Member)<br>
              19. Indian Medical Association (Life Member)<br>
              20. East Delhi Physicians Association (Life Member)<br>
              21. Ghaziabad Management Association(Life Member)<br>
              22. World Heart Federation (member)<br>
              23. European Primary Care cardiovascular Society<br>
              24. International Society Of Cardiovascular Pharmacotherapy<br>
              25. International Society For Heart Research<br>
              26. Khatri Sabha, Ghaziabad<br>
            </div>
            <button id="2" class="toggle-lines d-flex"><i class="fa fa-angle-down mx-1"></i><span>View More</span></button>
					`,
        price: 2500,
      },
    },
    {
      product: {
        id: "5",
        name: "PAPER PRESENTATION",
        logoURL: "/images/Services/1.jpg",
        fileName: "1.4.jpg",
        CategoryTypeId: "5",
        description:
         			`
						1.	Case presentation and faculty at INDIALIVE 2015<br>
						2.	Case presentation and faculty at NIC conference 2015<br>
						3.	CSI 2005 : Mitral L wave in HOCM : marker diastolic dysfunction  (free paper )<br>
						4.	CSI 2006 : Percutaneous closure of RSOV ; GB Pant experience (free paper)<br>
						5.	CSI 2006 : Evaluation of 2nd gen. DES with bioresorbable polymer.<br>

					`,
        price: 2500,
      },
    },
    {
      product: {
        id: "6",
        name: "LECTURES/PRESENTATIONS GIVEN",
        logoURL: "/images/Services/1.jpg",
        fileName: "1.5.jpg",
        CategoryTypeId: "6",
        description:
          			`
						•	Faculty at local seminars and conferences like IMA(Ghaziabad). IMA(West Ghaziabad)(2018, 2020), IMA(Meerut), IMA(Muzzafarnagar), IMA(Kanpur), IMA (Varanasi,) EDPA (East Delhi Physicians Association), API(Ghaziabad), API (Meerut),  API(Delhi), API (Agra), Association Of Family Physicians(Ghaziabad), HT Therapeutics Conclave (Mumbai,2017), NIMA (National Indian Medical Association), CSI (Cardiological Society Of India  Delhi Branch), Endocrine Society Of India, INASL, Transradial Interventions (TRICO Ahmedabad).   <br><br>
            
            <div class="toggle-text">
            •	Faculty in national conferences like 2nd American College Of Physicians (Delhi chapter, August 2017), CSI India, NIC, ICC, IIC(2014), APVIC(2017), UPDACON(2016), INDIA LIVE in India(2016,2020), EIICON, Kolkata 2021 and in Nepal. 
            <br><br>
					•	Faculty in international Conferences on interventional Cardiology like ACC, ESC, TCT(USA 2011, 2014, 2016), TCT-ASIA PACIFIC (S.Korea 2011), Euro PCR (Spain 2009 & France 2012), HEART FAILURE CONGRESS (Portugal, Spain, Greece),APVIC (Delhi), SINGAPORE LIVE (Singapore), Thailand, Malayasia 2001, Dubai, Vietnam, Australia, Macau, China, Italy, Kazakhstan and several hands-on workshops on complex angioplasty, Rotablation, IVUS, OCT and pacemaker/device clinics.
<br><br>
					•	Trained hands-on with stalwarts of Interventional Cardiology like <b>Dr. Antonio Colombo</b> in his Cath Lab at Milan, Italy(2014) and in Cath labs of Tokyo, Japan(2008).
<br><br>
					•	Founder of the <b>Ghaziabad Cardiology Forum</b>, a speciality group of Cardiologists of Ghaziabad since 2015.  
<br><br>
					•	International speaker and mentor for Astra Zeneca, Abbot, Boehringer Ingelheim, Cipla, Pfizer, Sanofi, Zydus, Sun/Ranbaxy, Glaxo Smithkline, Novo Nordisk, Lupin, Merck/MSD, Novartis & Intas pharmaceuticals.
<br><br>
					•	<b>Completed certificate course</b> on Diabetes management organized by Cardiff University and North Delhi Diabetes Centre 2017
<br><br>
					•	<b>Completed certification course</b> on Cardiovascular Intravascular imaging and Physiology <b>(OCT and IVUS)</b> by Imaging and Physiology Council Of India(SCIP) 2017, Chennai
<br><br>
					•	<b>Completed certification course</b> in Cardiovascular Rehabilitation by ICCPR(International Council Of Cardiovascular Prevention and Rehabilitation), 2019.
<br><br>
					•	<b>Completed 4 certification courses</b> in diagnosis, prevention and management of Corona Infection. 2 from WHO, 1 from Govt of Gujarat, 1 from MOHFW, 2020.
<br><br>
					•	<b>Completed Certification course</b> on CVD management and Covid 19 by Indian Society Of Hypertension (ISH), 2019.
<br><br>
					•	<b>Completed IMPELLA</b> training from Abiomed Academy. Certified for Impella implantation and management, 2021.
</div>
<button id="3" class="toggle-lines d-flex"><i class="fa fa-angle-down mx-1"></i><span>View More</span></button>					`,
        price: 2500,
      },
    },
    {
      product: {
        id: "7",
        name: "CLINICAL PUBLICATIONS/ABSTRACTS ",
        logoURL: "/images/Services/1.jpg",
        fileName: "1.6.jpg",
        CategoryTypeId: "7",
        description:
          			`
					1.   Contributor in <b>Consensus statement</b> for management of Dyslipidemia in Indian Population, Lipid Association Of India Meeting, Part 2, May 2016	<br><br>

					2.	Contributor in <b>Indian Guidelines On hypertension 111</b>, J Clin Prev Cardiol, 2013:2(3): 128-    61, Vol 2, Jul 2013, Hypertension Society Of India.
<br><br>
<div class="toggle-text" id="4">
					3.	Nath G, <b>Khanna A</b>, Singh VP, Sundar S, Rai M. Spectrum Of Infections In Leukemia: A Tertiary Hospital Report.; Ind J Prev Soc Med 2003; 34(1&2):1-7. (Indexed in Ind Med)
<br><br>
					4.	VP Singh, <b>A Khanna</b> et al. Non Hodgkins Lymphoma with Pure Red Cell Aplasia: J Assoc Physicians India 49,1123-1124.11, 2001. 
<br><br>			
					1.	<b>Abstracts:</b><br>
						1.	DES versus BMS in Diabetic Patients undergoing Elective PCI. S. Tyagi, V. Trehan, S. Mukhopadhyay,<b> Asit Khanna</b> et al. Indian Heart J 2005; 57,442.<br>
						2.	Non-Surgical Management of C. Tamponade caused by Temp. Pacemaker Lead. V. Trehan,V. Mehta, <b>Asit Khanna</b> et al. Indian Heart J 2005; 57: 476.<br>
						3.	Acquired Gerbode Defect – Successful Device Closure V. Trehan, S Ramakrishnan, <b>Asit Khanna</b> et al. Indian Heart J 2005; 57: 476.<br>
						4.	Transcatheter Closure of ASD with Amplatzer Septal Occluder: Follow-up Results S.Tyagi, V. Trehan, <b>Asit Khanna</b> et al. Indian Heart J 2005; 57:483.
						5.	Duct Occluder – Deployment Difficulty due to Inadequate Shape Memory V.Trehan, A. Nigam, <b>Asit Khanna</b> et al. Indian Heart J 2005, 483.<br>
						6.	Transcatheter Closure of PmVSD by Amplatzer Devices:Follow-up Results V. Trehan, S. Mukhopadhyay, <b>Asit Khanna</b> et al.Indian Heart J 2005; 57: 485.<br>
						7.	Impaired Long Axis Dynamics of  LV in HCM: Relationship with WT & LVOT Gradient V. Mehta, <b>Asit Khanna</b> et al Indian Heart J 2005;57:520.<br>
						8.	Mitral L Wave in Pts with HCMP: Marker of Advanced Diastolic Dysfunction V. Mehta, M. Sharma, <b>Asit Khanna</b> et al. Indian Heart J 2005; 57: 532.<br>
						9.	N Acetyl Cysteine and Contrast induced Nephropathy in diabetic angioplasty pts. KD.Singh, R. Gupta, <b>Asit Khanna</b> et al, Indian Heart J, 2006,58:419.<br>
						10.	Evaluation of 2nd gen. DES with reservoir based bioresorbable polymer. S. Tyagi, N. Bhamri, <b>Asit Khanna</b> et al. Indian Heart J, 2006:58:42<br>
            </div>
            <button class="toggle-lines d-flex" id="4"><i class="fa fa-angle-down mx-1"></i><span>View More</span></button>					`,
        price: 2500,
      },
    },
    {
      product: {
        id: "8",
        name: "COMMUNITY ACTIVITIES:",
        logoURL: "/images/Services/1.jpg",
        fileName: "1.7.jpg",
        CategoryTypeId: "8",
        description:
          			`
						1.	Represented school in Music and Essay competitions, Rotary events etc.<br>
						2.	Secretary of medical college literary committee from 1993 – 1996.<br>
						3.	Organizing secretary of PLEXUS, literary-cultural inter college festival of IMS BHU.<br>
						4.	Captained and won different inter college festival competitions from 1993-1997.<br>
            <div class="toggle-text" >
						5.	Participated and represented college in different sports like football and cricket.<br>
						6.	As a member of Ghaziabad Management Association, interacting with industry leaders/factory owners and management of Educational institutions in and around Ghaziabad. Lecturing and mentoring in their conferences.<br>
						7.	  Organizing and conducting free cardiac check up and treatment camps in association with organizations like Rotary Club, Khatri Sabha, Bharat Vikas Parishad, NGOs( Dhruv Forever Foundation, Kitaab Club, VSSVSS, Utsah Toli, UANA, SIF), Association Of American Physicians Of Indian Origin,  Industry owners Association, Ex Servicemen’s association, Army wive’s association, Schools, Ordinance Factory Board, UPPCL, NTPC, BEL, BHEL,NHPC, PAC, CISF, Market Associations, Pensioner’s groups, Trade unions, RWAs etc.<br>
						8.	  Partnering with allied medical science associations like Vishwa Ayurved Sansthan, NIMA, Ghaziabad Homoeopathy Association for integrated approach to health and holistic healing in conferences, camps and lectures. <br>
						9.	  Speaker in several Radio(90.4 Fm, HINT Fm),TV(NDTV, AajTak) and Facebook live ( <a href="https://www.facebook.com/speakforhealth/videos/dr-asit-khanna-a-renowned-cardiologist-from-ghaziabad-is-sharing-his-valuable-gu/502352253938477/">https://www.facebook.com/speakforhealth/videos/dr-asit-khanna-a-renowned-cardiologist-from-ghaziabad-is-sharing-his-valuable-gu/502352253938477/ )</a> shows, online blogs/websites, cable TV Talk shows/question and answer programs for public education and awareness.<br>
						10.	 Contributor of several articles in Newspapers (TOI, Outlook, Navbharat Times, Women’s Era) and magazines on important health topics and events.<br>
						11.	Maintain own YOUTUBE channel for public health awareness (Health talks by Dr Asit Khanna) (<a href="https://www.youtube.com/watch?v=Qo3jBBETpBA">https://www.youtube.com/watch?v=Qo3jBBETpBA</a>) <br>
						(<a href="https://www.youtube.com/watch?v=HtbSS8BJBDs"> https://www.youtube.com/watch?v=HtbSS8BJBDs</a>)<br><a href="https://youtu.be/xjHJGEZnCBQ?si=k7H6hCaL2EyY7IKr">https://youtu.be/xjHJGEZnCBQ?si=k7H6hCaL2EyY7IKr</a><br><a href="https://youtu.be/J0SwDZWZEqA?si=rSUUlhbyGTb53W4j">https://youtu.be/J0SwDZWZEqA?si=rSUUlhbyGTb53W4j</a><br><a href="https://youtu.be/IzugrFLDVZI?si=mg3zPIv6Xscjcso0">https://youtu.be/IzugrFLDVZI?si=mg3zPIv6Xscjcso0</a><br><br><a href="https://youtube.com/shorts/eOgXvJHGHk8?si=7MZNUv9VzWmvMcMg>https://youtube.com/shorts/eOgXvJHGHk8?si=7MZNUv9VzWmvMcMg</a><br>
						12.	Maintain own website for updating information on all these subjects and activities.
						(<a href="www.cardiologistinghaziabad.com">www.cardiologistinghaziabad.com</a> ) <br>
						13.	Passionate about gardening and horticulture. Have won Horticulture Society awards on the subject.<br>
						14.	<b>Founder of THE HOPE FOUNDATION (<a href="www.hopefoundationngo.com"> www.hopefoundationngo.com</a> ) a non profit organization working in the fields of health, education, forestation and innovative farming in Uttarakhand and Ghaziabad</b>. Since last 6 years it has been involved in donations of educational materials/grants/scholarships/laptops/computers to poor schoolchildren, blankets/clothes to poor, medical camps/medicines/free blood tests and check ups and public health/education/ vocational training lectures, tree plantations, lake regeneration and other activities in collaboration with local district administration and NGOs working in similar fields(UANA, SIF, VSSVSS, Utsah Toli, AAPI, Dhruv Forever, Naukuchiatal Foundation, Kitaab Club, Janmaitri Sangathan etc). Activities uploaded at Facebook page –<a href="https://www.facebook.com/Hope-Dr-Asit-Khannas-Initiative-for-Healthy-Uttarakhand-921423201228626/"> https://www.facebook.com/Hope-Dr-Asit-Khannas-Initiative-for-Healthy-Uttarakhand-921423201228626/</a> <br>
            </div>
            <button  class="toggle-lines d-flex" btnId="5"><i class="fa fa-angle-down mx-1"></i><span>View More</span></button>
					`,
        price: 2500,
      },
    },
  ],
};

var dataForServiceTabs = {
  productsTabsInServices: [
    {
      productTab: {
        id: "1",
        name: "TEACHING ACTIVITES",
        CategoryTypeId: "1",
      },
    },
    {
      productTab: {
        id: "2",
        name: "HOSPITAL COMMITTEE APPOINTMENTS ",
        CategoryTypeId: "2",
      },
    },
    {
      productTab: {
        id: "3",
        name: "HONOURS AND AWARDS",
        CategoryTypeId: "3",
      },
    },
    {
      productTab: {
        id: "4",
        name: "FELLOWSHIPS AND SOCIETY MEMBERSHIPS",
        CategoryTypeId: "4",
      },
    },
    {
      productTab: {
        id: "5",
        name: "PAPER PRESENTATIONS ",
        CategoryTypeId: "5",
      },
    },
    {
      productTab: {
        id: "6",
        name: "LECTURES/PRESENTATIONS GIVEN",
        CategoryTypeId: "6",
      },
    },
    {
      productTab: {
        id: "7",
        name: "CLINICAL PUBLICATIONS/ABSTRACTS ",
        CategoryTypeId: "7",
      },
    },
    {
      productTab: {
        id: "8",
        name: "COMMUNITY ACTIVITIES:",
        CategoryTypeId: "8",
      },
    },
  ],
};

jQuery(document).ready(function () {
  //Start Code for tab buttons
  OBJForServiceTabs = {};
  OBJForServiceTabs.apply = function (dataForServiceTabs) {
    $.each(dataForServiceTabs, function () {
      $.each(this, function (key, value) {
        // console.log(this);
        var htmlDataForServiceTabs =
          "<li class='nav-item'><a class='nav-link jQServicesTabClick' customAttrCategoryTypeID='" +
          value.productTab.CategoryTypeId +
          "' data-toggle='tab' >" +
          value.productTab.name +
          "</a></li>";

        $(".jQueryClassForServiceTabs").append(htmlDataForServiceTabs);
      });
    });
  };
  OBJForServiceTabs.apply(dataForServiceTabs);
  //End Code for tab buttons
  //for looping in service images
  OBJ = {};
  OBJ.apply = function (data) {
    $.each(data, function () {
      $.each(this, function (key, value) {
        // var customerWhatsAppNumber = '9818882958';
        // var htmlDataForServices="<div class='col-12 col-lg-3 col-md-4 col-sm-6 mb-3 jQClassForTabClickFunction' customAttrForImages="+ value.product.CategoryTypeId +"><div class='card'><div class='card-body '>";
        // htmlDataForServices=htmlDataForServices+"<h4 class='card-title'>"+ value.product.name;
        // htmlDataForServices = htmlDataForServices  + "<h4 class='card-title'>" + value.product.description + "</h4><br>";
        // htmlDataForServices = htmlDataForServices  + "<h4 class='card-title'>" + "<span> Price ₹"+ value.product.price + "</span>" + "</h4>"  ;
        // "</div></div></div>";
        // htmlDataForServices = htmlDataForServices + `<div class="mt-4"><a href='https://wa.me/${customerWhatsAppNumber}/?text=Hi%2C%20I%20want%20to%20know%20about%20"${value.product.name}"' class='btn btn-success'><i class='fab fa-whatsapp pr-1'></i>Inquire Now</a></div></div>`;

        var htmlDataForServices = `<div class="col-12 col-lg-3 col-md-4 col-sm-6 mb-3 jQClassForTabClickFunction" customAttrForImages="${value.product.CategoryTypeId}"> 
				 	<div class="card mb-3" style="width:auto;box-shadow:2px 2px 10px #000;"> 
						<div class="card-header" style="font-size:1.7em;font-weight:bold;text-align:center;text-decoration:underline;color:#00d2ff;text-shadow:0px 0px 3px black; letter-spacing:2.5px">
							${value.product.name} 
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">${value.product.description}</li>
						</ul>	
					</div>
				</div>
				
				
				`;

        $(".templateClassForServies").append(htmlDataForServices);
      });
    });
  };
  OBJ.apply(data);

  //End Code written by Vivek on 27-04-2023 for looping in service images

  //Start Code written by Vivek on 28-04-2023 for click functions in tabs

  $(".jQServicesTabClick").on("click", function () {
    var TabTypeIDValue = $(this).attr("customAttrCategoryTypeID");
    // console.log(this);

    if (TabTypeIDValue == 3) {
      $(".jQClassForTabClickFunction").each(function (index) {
        $(this).css("display", "block");
      });
    } else {
      $(".jQClassForTabClickFunction").each(function (index) {
        if ($(this).attr("customAttrForImages") == TabTypeIDValue) {
          $(this).css("display", "block");
        } else {
          $(this).css("display", "none");
        }
      });
    }
  });

  //code for toggle lines if more than 5.

  // myObj = {} 
  // myObj.apply = function (data) {
  //   $.each(data, function () {
  //     $.each(this, function (key, value) {
  //       console.log("mydocuments: ",this);
  //     })
  //   })
  // }
  // myObj.apply(data);

  // $.each(data,(key,value)=>{
  //   $.each(value,(key, value)=>{
  //     // console.log();
  //     // console.log("value: ",value.product.description.length);
  //     const lines = value.product.description.length;
  //     if(value.product.id == 3){
  //       // console.log(value.product.id,": ",value.product.description);
  //       let also = value.product.description;
  //       let add = `</div><button  class="toggle-lines d-flex" btnId="${value.product.id}"><i class="fa fa-angle-down mx-1"></i><span>View More</span></button>`;
  //       let nString = also.concat(add);
  //       // console.log($(this));
  //       console.log(nString);
  //     }

  //   });
  // });

  $(".toggle-text").css({
    display:"none",
    overflow:"hidden",
  });
  // $(".toggle-lines").click(()=>{
    $(".toggle-lines").on("click",()=>{
    $(".toggle-text").slideToggle(500);
      $(".toggle-lines span").text(function(i, text){
        return text === "View More" ? "View Less" : "View More";
      });

      if($(".toggle-lines i").hasClass("fa-angle-down")){
        $(".toggle-lines i").removeClass("fa-angle-down").addClass("fa-angle-up");
      }else{
        $(".toggle-lines i").removeClass("fa-angle-up").addClass("fa-angle-down");
      };

  });


});