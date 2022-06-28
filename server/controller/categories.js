const categories = require("../../database/models/categories");
const subCategories = require("../../database/models/subCategories");
// import axios from 'axios'
const axios = require("axios");

// ================================================= Apis for categories =======================================================
//==============================================================================================================================

// add categoier ======================

const localBaseUrl = "http://localhost:8000";
const official = "http://157.245.102.136";

exports.addCatagories = async (req, res) => {
  console.log(req.files["category_image"]);

  // if (req.files['category_image'] === undefined) return res.status(203).send({message : 'Category Image Is Required !!!'})
  // req.body.category_image = `${official}/${req.files['category_image'][0].path}`

  const data = categories(req.body);

  await subCategories
    .findOne({
      sub_category_name: {
        $regex: `^${req.body.category_name}`,
        $options: "i",
      },
    })
    .then(async (result) => {
      if (result === null) {
        await data
          .save()
          .then(() => {
            res.send({ message: "Sub Categories Added successfully !!!" });
          })
          .catch((error) => {
            console.log(error);
            res.status(203);
            res.send({ message: "Duplicate Sub Category !!!" });
          });
      } else {
        res.status(203);
        res.send({
          message: "Category Name is already exist in sub category!!!",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(203);
      res.send({ message: "Something went wrong" });
    });
};

// get categories ===================

exports.getCatagories = async (req, res) => {
  await categories
    .find()
    .then((data) => {
      if (data) res.send(data);
      else res.send("no entries found");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// edit categories ======================

exports.editCatagories = async (req, res) => {
  console.log(req.body);
  console.log(req.files["category_image"]);

  if (req.files["category_image"] !== undefined)
    req.body.category_image = `${official}/${req.files["category_image"][0].path}`;

  await categories
    .findOneAndUpdate({ _id: req.body._id }, req.body)
    .then((data) => {
      if (data)
        return res
          .status(200)
          .send({ message: "Category is updated successfully." });
      else return res.status(203).send({ message: "No entries found" });
    })
    .catch((error) => {
      console.log(error);
      return res.status(203).send({ message: "Something went wrong !!!" });
    });
};

// delete category

exports.deleteCategory = async (req, res) => {
  // console.log(req.query)

  await categories.deleteOne({ _id: req.query.ID }).then((data) => {
    res.send({ massage: "Category deleted !!!" });
  });
};

// for Changing the Status of the category

exports.changeStatus = async (req, res) => {
  console.log(req.body);
  await categories
    .findByIdAndUpdate(
      { _id: req.body._id },
      { category_status: req.body.category_status }
    )
    .then((data) => {
      console.log(data);
      res.send("all okay");
    })

    .catch((err) => {
      console.log(err);
      res.status(203).send("Something went wrong !!!");
    });
};

exports.exportData = async (req, res) => {
  const data = [
    "036kumarisuman@gmail.com",
    "aadi@classbazaar.com",
    "aakritibokaria@gmail.com",
    "aamalaviya1001@gmaill.com",
    "aarushimajawadia@gmail.com",
    "abasdfc3003@gmail.com",
    "abc3002@gmail.com",
    "abc3003@gmail.com",
    "abc300dd3@gmail.com",
    "abcas3003@gmail.com",
    "abhashsth@gmail.com",
    "abhi9948992115@gmail.com",
    "abhishekabix08@gmail.com",
    "abhishekpancholi1701@gmail.com",
    "abhiyadav04ak@gmail.com",
    "adarshbhadauriya1998@gmail.com",
    "adiawnoori1@gmail.com",
    "aditimundada23@gmail.com",
    "admin@eklavyaglobalschoo.edu.in",
    "admin@eklavyaglobalschool.edu.in",
    "advgcp@gmail.com",
    "aishwaryaaashanmugam1708@gmail.com",
    "akshat@gmail.com",
    "akshay.lahoria00007@gmail.com",
    "akshay.nmail@gmail.com",
    "alexander.pickworth85@hotmail.com",
    "altjenberberi@gmail.com",
    "amatya.sumit@gmail.com",
    "amzadvalikhan@gmail.com",
    "ankitasingh285@gmail.com",
    "ankitesh01@gmail.com",
    "ansari.far86060@gmail.com",
    "anshuadepu@gmail.com",
    "anuj3002@gmail.com",
    "apoorva.bajaj@gmail.com",
    "apoorva@edubuk.com",
    "aravindkannan48@gmail.com",
    "areena.kamarudin@naturalgamma.com",
    "arjun.trunks@gmail.com",
    "armanaziz9891@gmail.com",
    "aruntpswimming@gmail.com",
    "aryankareer87@gmail.com",
    "asdf@dfa.com",
    "ashikaashiq2127@gmail.com",
    "ashutoshdebata99@gmail.com",
    "ashwinijirli@gmail.com",
    "asifperumana@gmail.com",
    "asrarmn@aol.com",
    "at788956@gmail.com",
    "auroscholar1@gmail.com",
    "avinashrupavatiya11@gmail.com",
    "ayelabs1@gmail.com",
    "azarudeen906@gmail.com",
    "azirah.mohd@naturalgamma.com",
    "babusurya1872@gmail.com",
    "bajaj.apoorva1@gmail.com",
    "balakonda99@gmail.com",
    "betaladarshit@gmail.com",
    "bharatdmehta@hot.mail.co.in",
    "bharathgowdah6@gmail.com",
    "bhavantolani29@gamil.com",
    "bhoirkirti8@gmail.com",
    "bhumiikarsshah@gmail.com",
    "bhushanbagul40877@gmail.com",
    "bikyadh@gmail.com",
    "bileshivani@gmail.com",
    "bishal061@gmail.com",
    "bishtpriyanka616@gmail.com",
    "bistajaveed99@gmail.com",
    "bitwit2019@gmail.com",
    "bitwittest2022@gmail.com",
    "bnsrirghuvnshi@gmail.com",
    "boga.krishnahari51312@gmail.com",
    "cb@demo.com",
    "chaks.gautam@gmail.com",
    "chakshu@samagragovernance.in",
    "chariyutest@gmail.com",
    "chatest@gmail.com",
    "chirayu@gmail.com",
    "chrtest@gmail.com",
    "chtest@gmail.com",
    "classbazaarco@gmail.com",
    "cnp2076@gmail.com",
    "creative.pshah@gmail.com",
    "cristinaroigpons@gmail.com",
    "da.felix.rules@gmail.com",
    "darklordhacktivist@gmail.com",
    "das.nilesh1997@gmail.com",
    "davidejhonson3@gmail.com",
    "dawoodmhd992@gmail.com",
    "dayana.nitla@gmail.com",
    "deekshaharish986@gmail.com",
    "deepeshjain1995@gmail.com",
    "demo@gmail.com",
    "democb@gmail.com",
    "devenrbr@gmail.com",
    "dfdf@ddasf.com",
    "dha.san1241@gmail.com",
    "dhan.niharika369@gmail.com",
    "dharanajoshi9@gmail.com",
    "dhotrevaishnavi0408@gmail.com",
    "dipanshutyagi07@gmail.com",
    "draksharaghuwanshi@gmail.com",
    "drjyotisharma93@gmail.com",
    "ds@aig.com",
    "edu@gmail.com",
    "edubuktest@gmail.com",
    "edubuktestmarch@gmail.com",
    "eklavya.global@gmail.com",
    "eklavyagroup@test.com",
    "email2shwetagupta@gmail.com",
    "falling.angel2016@gmail.com",
    "fearlessshanti_peace@yahoo.com",
    "fusion@test.com",
    "ga@ga.com",
    "ganaptewary@gmail.com",
    "gauravbasnet@outlook.com",
    "gauravpatil17678@gmail.com",
    "ghadiyapalak@gmail.com",
    "googoodan_1980@yahoo.com",
    "hamidajamadar7@gmail.com",
    "Haramai Joke",
    "harikadaripalli@gmail.com",
    "harrypottersas@gmail.com",
    "harsh23asd@gmail.com",
    "harsh3002@gmail.com",
    "harshalgour619@gmail.com",
    "harshareddysatti@gmail.com",
    "harshavar333@gmail.com",
    "harshdd23@gmail.com",
    "haseebahmed5230@gmail.com",
    "hchhabra419@gmail.com",
    "hello@io.com",
    "helloworld@gmail.com",
    "hemasree.desineni@gmail.com",
    "hirakpass@gmail.com",
    "hitaish63@gmail.com",
    "hitest@test.com",
    "hjbadhe@gmail.com",
    "icoiscsolarlatterns2019@gmail.com",
    "indorkar.divy@gmail.com",
    "info@tanvigarg.com",
    "iqbalqureshi8899@gmail.com",
    "itsnavkharoud@gmail.com",
    "jagjitsingh96100@gmail.com",
    "jain.k.hardik@gmail.com",
    "jaya67024@gmail.com",
    "jaysapra1234@gmail.com",
    "jhanhavitiwari@yahoo.com",
    "jibitesh.manadhar@gmail.com",
    "jitendrajittu1212@gmail.com",
    "jsaravanan19991223@gmail.com",
    "jurt.yashwant@gmail.com",
    "kaivalyapsheth@gmail.com",
    "kajal.nijhawan97@gmail.com",
    "kamalthakwani13@gmail.com",
    "kaur2604@gmail.com",
    "kaurdeep3696@gmail.com",
    "kavyashekar1802@gmail.com",
    "kavyasri2214@gmail.com",
    "keerthanasa24@gmail.com",
    "kenilsoni106@gmail.com",
    "kenyshah08@gmail.com",
    "keshavgarg0016@gmail.com",
    "khanamayesha72@gmail.com",
    "kksscc91@gmail.com",
    "kolarkaraditya4@gmail.com",
    "kshreyas752@gmail.com",
    "kunalsd@aol.in",
    "kushal.sj@somaiya.edu",
    "ladpratik29@gmail.com",
    "lakhan.1620me1202@kiet.edu",
    "linsukoshy@gmail.com",
    "lohia.rajesh@hotmail.com",
    "mahato30@gmail.com",
    "malikanshul29@gmail.com",
    "manandharabhinna@gmail.com",
    "manasabasavaraj07@gmail.com",
    "manayak74@gmail.com",
    "mannasaini899@gmail.com",
    "maulikmarkan@gmail.com",
    "meetpandit1998@gmail.com",
    "mehtarajb@gmail.com",
    "mhussain941@gmail.com",
    "michelleregi@outlook.com",
    "mithilmanek96@gmail.com",
    "mnb@mnb.com",
    "mohit.badala768@gmail.com",
    "mohit@gmail.com",
    "monil_prkh@yahoo.co.in",
    "mrjoker30112001@gmail.com",
    "mrprudhwidharreddy@gmail.com",
    "mrunalrao27008@gmail.com",
    "mrunalswaroop.work@gmail.com",
    "muhammedswalihap786@gmail.com",
    "musudodeja15432@gmail.com",
    "nageshwarinag2002@gmail.com",
    "namita.sethi0310@gmail.com",
    "naveenbhansali@gmail.com",
    "naveenlucifer17@gmail.com",
    "newusernilesh@gmail.com",
    "newusertesthr@gmail.com",
    "nikhilpant444@gmail.com",
    "nil@gmail.com",
    "nilesh0101@gmail.com",
    "nilesh2k14@gmail.com",
    "nilesh@gmail.com",
    "nilesh@test.com",
    "nileshnewuser@gmail.com",
    "nileshuser@gmail.com",
    "ninja@gmail.com",
    "nirajevo@gmail.com",
    "nirajpatil5896@gmail.com",
    "nirmalaa1sampath@gmail.com",
    "nirmalssbohra@gmail.com",
    "nisharma197@gmail.com",
    "nishchayjain070105@gmail.com",
    "ocean.kujur@gmail.com",
    "officiallyrohitb@gmail.com",
    "okm@okm.com",
    "omkar25salunkhe1999@gmail.com",
    "omprakashmeena636775@gmail.com",
    "p.mayur25@gmail.com",
    "p16arya@gmail.com",
    "paaaarthshah@gmail.com",
    "padmeshchari_ra@srmuniv.edu.in",
    "pagisneharsh@gmail.com",
    "pallavawon098@gmail.com",
    "panchalashish28321@gmail.com",
    "parag.asdfasdfas@gmail.com",
    "parag.badala@gmail.com",
    "parag.bala@gmail.com",
    "parag.dddd@gmail.com",
    "parag.sdfd@gmail.com",
    "parimal@gmail.com",
    "patilmeghana1210@gmail.com",
    "pavanmurugan2000@gmail.com",
    "pk7411956419@gmail.com",
    "prabhakrisheetha@gmail.com",
    "pradnyabhujbal01@gmail.com",
    "pragatichauda@gmail.com",
    "prahaladb2000@gmail.com",
    "prajwal7bhattarai@gmail.com",
    "prajwaltuladhar@gmail.com",
    "prakshisinghjadon25@gmail.com",
    "pranavwagh555@gmail.com",
    "pranaynkumar253@gmail.com",
    "prasadmusale27@gmail.com",
    "prasannaroyalchandu@gmail.com",
    "prashantchauhan538@gmail.com",
    "pratideshmukh4296@gmail.com",
    "pristi.acharya@gmail.com",
    "pritishranjanpatra@gmail.com",
    "priyankajagnade@gmail.com",
    "priyansh3600@gmail.com",
    "priyanshumehta1990@gmail.com",
    "qw1@qw1.com",
    "qwe@qwe.com",
    "qwert@qwert.com",
    "rachitgarg0208@gmail.com",
    "radhikasaini0604@gmail.com",
    "raghuvanshidivya2@gmail.com",
    "rahuldas3002@gmail.com",
    "rajat@gmail.com",
    "rajbmehta@icloud.com",
    "rajput.devendra30@gmail.com",
    "rajvi.sampat@yahoo.com",
    "ranbir016@gmail.com",
    "ranjitbhise2145@gmail.com",
    "rashmisampat65@gmail.com",
    "ratheesh009@gmail.com",
    "ravi3002@gmail.com",
    "ravit3002@gmail.com",
    "raznespkta@gmail.com",
    "rdrahul2602@gmail.com",
    "rhan3002@gmail.com",
    "rijvan.shihab29@gmail.com",
    "rishabhsheth.0@gmail.com",
    "rishabhtheright2@gmail.com",
    "ritikamahato0461@gmail.com",
    "rohit.g2962@gmail.com",
    "rohitatyourservice@gmail.com",
    "rohithbolishetty@gmail.com",
    "ronak4545@gmail.com",
    "roshanranka17@gmail.com",
    "rubysagarika435@gmail.com",
    "rupesh@nsi.edu.np",
    "rutik1999@gmail.com",
    "rutujaj845@gmail.com",
    "rutwiknighot6@gmail.com",
    "ryaagni@hotmail.com",
    "sagarsampat@gmail.com",
    "sahil@gmail.com",
    "saiaarthiganesh@gmail.com",
    "saianugnasureddi@gmail.com",
    "saijanakiramkaigala@gmail.com",
    "saikrishnakodari00@gmail.com",
    "saiprasanna2626@gmail.com",
    "saipriyadx51@gmail.com",
    "saisriadapa1997@gmail.com",
    "sam47deep@gmail.com",
    "sandaligupta1@gmail.com",
    "sanjanasuresh5517@gmail.com",
    "sanketjain601@gmail.com",
    "santhoshireddy217@gmail.com",
    "saran.suresh2310@gmail.com",
    "saran.suresh@outlook.com",
    "saran@gmail.com",
    "sarthakk065@gmail.com",
    "sathishneymar17@gmail.com",
    "seelampranavi2410@gmail.com",
    "seshank2hav@gmail.com",
    "shadijaneha4@gmail.com",
    "shamapatan999@gmail.com",
    "shivrajhuded3939@gmail.com",
    "shravanyakompalli@gmail.com",
    "shreyaaa1981@gmail.com",
    "shreyamago@gmail.com",
    "shreyasoreng17@gmail.com",
    "shubham7putess@gmail.com",
    "shubhamkokulwar007@gmail.com",
    "shwetaranjit444@gmail.com",
    "sikendarsahu3002@gmail.com",
    "simran22saini@yahoo.co.in",
    "singh99ayu@gmail.com",
    "singhaniavinit01451@gmail.com",
    "singhsanket597@gmail.com",
    "sivag9214@gmail.com",
    "sivakumargokul2001@gmail.com",
    "skapasep1973@gmail.com",
    "sohamkulkarnisk2000@gmail.com",
    "somdevchaudhuri@yahoo.co.in",
    "somkuwarankit@gmail.com",
    "sreejith97sv@gmail.com",
    "srijoe143@gmail.com",
    "sudhikshamalla28@gmail.com",
    "sukeerthi56@gmail.com",
    "sulekhapatel2002@gmail.com",
    "sumit73sarkar@gmail.com",
    "sumit8692@gmail.com",
    "sunil.rana@prabhubank.com",
    "surendrashivamjaiswal@gmail.com",
    "sushil.dhungana.52@gmail.com",
    "swathiramancha@gmail.com",
    "take2gaurav@gmail.com",
    "tanmaysrivastava2000@gmail.com",
    "tanushri77@gmail.com",
    "tanushrim77@gmail.com",
    "tejasg530@gmail.com",
    "test1234@gmail.com",
    "test1@gmail.com",
    "test33003@gmail.com",
    "test330tt03@gmail.com",
    "testcbapril@gmail.com",
    "testedubukuser@gmail.com",
    "tester@gmail.com",
    "testeryashwant3002@gmail.com",
    "testing3002@gmail.com",
    "testing@gmail.com",
    "testingagain@gmail.com",
    "testingedubuk@gmail.com",
    "testv1@gmail.com",
    "thakurneha0209@gmail.com",
    "thepositivecloud@gmail.com",
    "tibrewalv75@gmail.com",
    "tirthatanna3@gmail.com",
    "triptisagar27@gmail.com",
    "tttt@gmail.com",
    "ttttt@gmail.com",
    "ttttter@gmail.com",
    "ttttttt@gmail.com",
    "tuna@gamil.com",
    "ujjainshristy77@gmail.com",
    "upadhyay.vibhubahai1999@gmail.com",
    "usa2323@gmail.com",
    "usertestapril@gmail.com",
    "uttamsavaliya12345@gmail.com",
    "vaanib9@gmail.com",
    "varun29789@yahoo.com",
    "vasumadan15@gmail.com",
    "vekariyaradhika7@gmail.com",
    "vincentpatrick32@gmail.com",
    "vrushalij2651@gmail.com",
    "vydhu4567@gmail.com",
    "welltesting@test.com",
    "xtjsakj@hi2.in",
    "xyz30@gmail.com",
    "yashking3002@gmail.com",
    "yashking34343002@gmail.com",
    "yashwant.2424@gmail.com",
    "yashwantsahu3002@gmail.com",
    "yasnuj3002@gmail.com",
    "yasyh.badala@gmail.com",
    "yoyolokbuster572@gmail.com",
    "yr828847@gmail.com",
    "zxcv@zxcv.com",
  ];

  const compareData = ["abc3002@gmail.com", "admin@eklavyaglobalschoo.edu.in", "admin@eklavyaglobalschool.edu.in", "admintest@gmail.com", "akshat@gmail.com", "ankitesh01@gmail.com", "apoorva.bajaj@gmail.com", "apoorva@edubuk.com", "areena.kamarudin@naturalgamma.com", "armanaziz9891@gmail.com", "ASD@ADA.COM", "asdf@dfa.com", "auroscholar1@gmail.com", "ayelabs1@gmail.com", "azirah.mohd@naturalgamma.com", "bajaj.apoorva1@gmail.com", "baldala@gmail.com", "bitwit2019@gmail.com", "bitwittest2022@gmail.com", "boga.krishnahari3@gmail.com", "boga.krishnahari51223@gmail.com", "boga.krishnahari51312@gmail.com", "boga.krishnahari513333@gmail.com", "boga.krishnahari51333@gmail.com", "cb@demo.com", "chrtest@gmail.com", "davidejhonson3@gmail.com", "democb@cb.com", "democb@gmail.com", "demo@gmail.com", "DFDF@DDASF.com", "dogofdharma@gmail.com", "dsfsdf@DFSD.COM", "edubuktestmarch@gmail.com", "edu@gmail.com", "eklavya.global@gmail.com", "eklavyagroup@test.com", "finalfridaytest@gmail.com", "fusion@test.com", "ga@ga.com", "googoodan_1980@yahoo.com", "harsh3002@gmail.com", "hello@io.com", "helloworld@gmail.com", "hitest@test.com", "info@tanvigarg.com", "jaysapra1234@gmail.com", "jyotstiwari@rediffmail.com", "kavyashekar1802@gmail.com", "mnb@mnb.com", "mnu@gmail.com", "mohit@gmail.com", "newtest@yahoo.com", "newuser@gmail.com", "newusernilesh@gmail.com", "newusertest@gmail.com", "newusertesthr@gmail.com", "nilesh@bitwittech.com", "nilesh@gmail.com", "nilesh@gm.com", "nileshnewuser@gmail.com", "nileshuser@gmail.com", "nil@gmail.com", "november18@gmail.com", "nov@gmail.com", "okm@okm.com", "omprakashmeena636775@gmail.com", "parag.badala@gmail.com", "parag.bala@gmail.com", "parimal@gmail.com", "rahul3002@gmail.com", "rainyday18@gmail.com", "rajat@cb.com", "rajatcb@gmail.com", "rajat@gmail.com", "ravi3002@gmail.com", "ravit3002@gmail.com", "redirectiontest@gmail.com", "rhan3002@gmail.com", "ronak4545@gmail.com", "ronak@gmail.com", "sahil@gmail.com", "sikendarsahu3002@gmail.com", "test1123@gmail.com", "test1234@gmail.com", "test1@gmail.com", "test83020@gmail.com", "testcbapril@gmail.com", "testedubukuser@gmail.com", "test@gmail.com", "testingagain@gmail.com", "testingedubuk@gmail.com", "testing@gmail.com", "testv1@gmail.com", "thepositivecloud@gmail.com", "tirthatanna3@gmail.com", "usertestapril@gmail.com", "wantsahu3002@gmail.com", "welltesting@test.com", "yashking3002@gmail.com", "yashwantsahu3002@gmail.com", "zxcv@zxcv.com", , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ]

  const number = [];

  let i = 0;

  await data.map(async (email, index) => {
    await axios
      .get(`https://auth.classbazaar.in/api/user?loginId=${email}`, {
        headers: {
          Authorization: `NiITD64khrkH7jn6PUNYCPdancc2gdiD8oZJDTsXFOA`,
        },

      })
      .then((data) => {
        if(!compareData.includes(data.data.user.email))
          {console.log(i,",",data.data.user.mobilePhone,",",data.data.user.email,",",data.data.user.username)
        i++;}
        // number.push({data.data.user.mobilePhone });
      });
  });

  res.send(number)

};

// ================================================= Apis for categories Ends =======================================================
