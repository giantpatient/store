function resetDiv() {
  id = 1;
  var addOnDiv = document.getElementById("addOnDiv");
  addOnDiv.innerHTML =
    "<div id='" +
    id +
    "'><br><fieldset><label for='english'>Add-on Name (English):</label><input type='text' placeholder='Add-on name' name='AddOn[" +
    id +
    "][0]' id='AddOn[" +
    id +
    "][0]' required><button type='button' class='plus-btn' onclick='closedat(this.name)' name='" +
    id +
    "'>x</button><br><label for='native'>Add-on Name (Arabic):</label><input type='text' placeholder='Name in Arabic' name='AddOn[" +
    id +
    "][1]' id='AddOn[" +
    id +
    "][1]' required><br><label for='price'>Price (VAT Exclusive):</label><input type='number' name='AddOn[" +
    id +
    "][2]' id='AddOn[" +
    id +
    "][2]' step='0.001' required><label for='price'>BHD</label><br><br><label for='categoryAssign'>Assign to category:</label><select  name='AddOn[" +
    id +
    "][3]' id='AddOn[" +
    id +
    "][3]'><option value='0'>Insert Categories here dynamically</option><option value='1'>insert everything in between dynamically</option><option value='2'>Last</option></select> <br><br></fieldset><br></div>";
}

function closedat(name) {
  var fieldset = document.getElementById(name);
  fieldset.outerHTML = " ";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  closeAddAddOn();
  closeAOptions();
  closeCOptions();
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  var english = document.getElementById("english");
  var nativee = document.getElementById("native");
  english.value = "";
  nativee.value = "";
}

function addAddOn() {
  document.getElementById("addAddOn").style.display = "block";
  closeForm();
  closeAOptions();
  closeCOptions();
}

function closeAddAddOn() {
  document.getElementById("addAddOn").style.display = "none";
}

var id = 1;

function skiddy() {
  id++;
  var addOnDiv = document.getElementById("addOnDiv");
  addOnDiv.insertAdjacentHTML(
    "beforeend",
    "<div id='" +
      id +
      "'><br><fieldset><label for='english'>Add-on Name (English):</label><input type='text' placeholder='Add-on name' name='AddOn[" +
      id +
      "][0]' id='AddOn[" +
      id +
      "][0]' required><button type='button' onclick='closedat(this.name)' name='" +
      id +
      "'>x</button><br><label for='native'>Add-on Name (Arabic):</label><input type='text' placeholder='Name in Arabic' name='AddOn[" +
      id +
      "][1]' id='AddOn[" +
      id +
      "][1]' required><br><label for='price'>Price (VAT Exclusive):</label><input type='number' name='AddOn[" +
      id +
      "][2]' id='AddOn[" +
      id +
      "][2]' step='0.001' required><label for='price'>BHD</label><br><br><label for='categoryAssign'>Assign to category:</label><select  name='AddOn[" +
      id +
      "][3]' id='AddOn[" +
      id +
      "][3]'><option value='0'>Insert Categories here dynamically</option><option value='1'>insert everything in between dynamically</option><option value='2'>Last</option></select> <br><br></fieldset><br></div>"
  );

  var assignTo = document.getElementById("AddOn[" + id + "][3]");
  assignTo.innerHTML = "";

  console.log(object22);
  if (typeof object00 != "undefined" && object00 != null) {
    for (i = 0; i < object00.length; i++) {
      assignTo.insertAdjacentHTML(
        "beforeend",
        "<option value='" +
          object00[i].CategoryID +
          "'>" +
          object00[i].CategoryEnglish +
          "</option>"
      );
    }
  } else {
    for (i = 0; i < object22.length; i++) {
      assignTo.insertAdjacentHTML(
        "beforeend",
        "<option value='" +
          object22[i].CategoryID +
          "'>" +
          object22[i].CategoryEnglish +
          "</option>"
      );
    }
  }
}

function resetCOptions() {
  var cid = document.getElementById("CID");
  var CatEng = document.getElementById("CatEng");
  var CatNat = document.getElementById("CatNat");
  CatEng.value = "";
  CatNat.value = "";
  cid.value = "";
}

function openCOptions(name) {
  document.getElementById("COptions").style.display = "block";
  var eng = document.getElementById(name).childNodes[0].innerHTML;
  var nat = document.getElementById(name).childNodes[1].value;
  var cid = document.getElementById("CID");
  var CatEng = document.getElementById("CatEng");
  var CatNat = document.getElementById("CatNat");
  CatEng.value = eng;
  CatNat.value = nat;
  cid.value = name;

  
  closeAddAddOn();
  closeForm();
  closeAOptions();
}

function closeCOptions() {
  resetCOptions();
  document.getElementById("COptions").style.display = "none";
}

var modal = document.getElementById("myModal");

function openPrompt() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  modal.style.display = "block";
}

function Cancel() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("closeIt")[0];
  var span2 = document.getElementById("span");
  modal.style.display = "none";
}

function resetAOptions() {
  var aid = document.getElementById("AID");
  var AddEng = document.getElementById("AEng");
  var AddNat = document.getElementById("ANat");
  var AddOnPrice = document.getElementById("AddOnPrice");

  AddEng.value = "";
  AddNat.value = "";
  aid.value = "";
  AddOnPrice.value = "";
}

function closeAOptions() {
  document.getElementById("AOptions").style.display = "none";
  resetAOptions();
}

function openAOptions(name) {
  document.getElementById("AOptions").style.display = "block";
  var AddOnId = document.getElementById(name);
  var CatIDfk = AddOnId.parentNode.id;
  
  var categoryIDFK = CatIDfk.slice(0, -1);

  var aEng = document.getElementById(name).childNodes[0].innerHTML;
  var aNat = document.getElementById(name).childNodes[1].value;
  var price = document.getElementById(name).childNodes[3].innerHTML;
  var aid = document.getElementById("AID");
  var AddEng = document.getElementById("AEng");
  var AddNat = document.getElementById("ANat");
  var AddOnPrice = document.getElementById("AddOnPrice");
  var CATIDFK = document.getElementById("CATID");

  AddEng.value = aEng;
  AddNat.value = aNat;
  aid.value = name;
  AddOnPrice.value = price;
  CATIDFK.value = categoryIDFK;

  
  closeAddAddOn();
  closeForm();
  closeCOptions();
}

function collapse(name, id) {
  var div = document.getElementById(name);
  var Chck = document.getElementById(id);
  if (Chck.innerHTML == "Collapse") {
    div.style.display = "none";
    Chck.innerHTML = "View";
  } else if (Chck.innerHTML == "View") {
    div.style.display = "block";
    Chck.innerHTML = "Collapse";
  }
}

function searchAddOns() {
  var searchField = document.getElementById("addOnSearch");
  var filter = searchField.value.toUpperCase();
  var searchTo = document.getElementsByClassName("search");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < searchTo.length; i++) {
    var s = searchTo[i].firstChild;
    console.log(s);
    var txtValue = s.innerHTML;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchTo[i].style.display = "";
    } else {
      searchTo[i].style.display = "none";
    }
  }
}
