function resetDiv() {
  id = 1;
  var itemDiv = document.getElementById("itemDiv");
  itemDiv.innerHTML =
    "<div id='" +
    id +
    "'><br><fieldset><label for='english'>Item Name (English):</label><input type='text' placeholder='Item name' name='Item[" +
    id +
    "][0]' id='Item[" +
    id +
    "][0]' required><button type='button' onclick='closedat(this.name)' name='" +
    id +
    "'>x</button><br><label for='native'>Item Name (Arabic):</label><input type='text' placeholder='Name in Arabic' name='Item[" +
    id +
    "][1]' id='Item[" +
    id +
    "][1]' required><br><label for='price'>Price (VAT Exclusive):</label><input type='number' name='Item[" +
    id +
    "][2]' id='Item[" +
    id +
    "][2]' step='0.001' required><label for='price' class='currency'>BHD</label><br><br><label for='categoryAssign'>Assign to category:</label><select  name='Item[" +
    id +
    "][3]' id='Item[" +
    id +
    "][3]'><option value='0'>Insert Categories here dynamically</option><option value='1'>insert everything in between dynamically</option><option value='2'>Last</option></select> <br><br></fieldset><br></div>";
}

function closedat(name) {
  var fieldset = document.getElementById(name);
  fieldset.outerHTML = " ";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  closeItem();
  closeIOptions();
  closeCOptions();
}
function addonpopup() {
  document.getElementById("addOns").style.display = "block";
  document.getElementById("id01").style.display = "none";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  var english = document.getElementById("english");
  var nativee = document.getElementById("native");
  english.value = "";
  nativee.value = "";
}

function addItem() {
  document.getElementById("addItem").style.display = "block";
  closeForm();
  closeIOptions();
  closeCOptions();
}

function closeItem() {
  document.getElementById("addItem").style.display = "none";
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
  // var eng = document.getElementById(name).childNodes[0].innerHTML;
  // var nat = document.getElementById(name).childNodes[1].value;
  // var rank = document.getElementById(name).childNodes[2].value;
  // var cid = document.getElementById("CID");
  // var CatEng = document.getElementById("CatEng");
  // var CatNat = document.getElementById("CatNat");
  // var EditRank = document.getElementById("EditRank");
  // var currentRanking = document.getElementById('catCurrentRank');

  // var ranking = parseInt(rank);
  // ranking2 = rank-1;
  // CatEng.value = eng;
  // CatNat.value = nat;
  // cid.value = name;
  // EditRank.selectedIndex = ranking2;
  // currentRanking.value = rank;

  document.getElementById("COptions").style.display = "block";
  closeItem();
  closeForm();
  closeIOptions();
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

function resetIOptions() {
  //var IId = document.getElementById("IID");
  var ItemEng = document.getElementById("EditItem[1][0]");
  var ItemNat = document.getElementById("EditItem[1][1]");
  var ItemPrice = document.getElementById("EditItem[1][2]");

  ItemEng.value = "";
  ItemNat.value = "";
  //	IId.value = "";
  ItemPrice.value = "";
}

function closeIOptions() {
  document.getElementById("IOptions").style.display = "none";
  resetIOptions();
}

function closeAddOns() {
  document.getElementById("addOns").style.display = "none";
  // document.getElementById("AddOnDiv").innerHTML = "";
}

function closeEditAddOns() {
  document.getElementById("EditAddOns").style.display = "none";
  document.getElementById("EditAddOnsDiv").innerHTML = "";
}

function clickAll(name, id) {
  var AddOns = document.getElementsByClassName(name);
  var checkbox = document.getElementById(id);

  if (checkbox.checked == true) {
    for (i = 0; i < AddOns.length; i++) {
      AddOns[i].checked = true;
    }
  } else if (checkbox.checked == false) {
    for (i = 0; i < AddOns.length; i++) {
      AddOns[i].checked = false;
    }
  }
}

function removeAddOn(name) {
  document.getElementById(name).outerHTML = "";
}

var xx = 0;
var gg = 0;
function PassAddOns() {
  var classes = document.getElementsByClassName("addOncheckbox");
  console.log(classes);

  var testing = 0;

  for (v = 0; v < classes.length; v++) {
    if (classes[v].checked == true) {
      testing++;
      break;
    }
  }

  if (testing == 1) {
    // insert div here
    var PassedAddOnDiv = document.getElementById("PassedAddOnDiv");
    PassedAddOnDiv.insertAdjacentHTML(
      "beforeend",
      "<div id='" +
        gg +
        "xx'><br><fieldset id='" +
        gg +
        "x'><label>Category name (English):</label><input type='text' id='AddOn[" +
        gg +
        "][0]' name='AddOn[" +
        gg +
        "][0]' required><br><label>Category name: (Arabic):</label><input type='text' id='AddOn[" +
        gg +
        "][1]' name='AddOn[" +
        gg +
        "][1]' required><br><label>Required or optional?:</label><select id='AddOn[" +
        gg +
        "][2]' name='AddOn[" +
        gg +
        "][2]'><option value='y'>required</option><option value='n'>optional</option></select><br><label>Minimum choices:</label><input type='number' id='AddOn[" +
        gg +
        "][3]' name='AddOn[" +
        gg +
        "][3]'><br><label>Maximum choices:</label><input type='number' id='AddOn[" +
        gg +
        "][4]' name='AddOn[" +
        gg +
        "][4]'><br><input type='hidden' id='AddOn[" +
        gg +
        "][5]' name='AddOn[" +
        gg +
        "][5]' value=''><input type='hidden' name='AddOn[" +
        gg +
        "][6]' id='AddOn[" +
        gg +
        "][7]' value=''><label id='AddOn[" +
        gg +
        "][6]'></label></fieldset></div>"
    );

    //var fieldset = document.getElementById(gg + "x");
    var section = document.getElementById(gg + "x");
    var elements = "AddOn[" + gg + "][6]";
    var hiddenInput = "AddOn[" + gg + "][5]";
    var hiddenNames = "AddOn[" + gg + "][7]";
    console.log(elements);
    var fieldset = document.getElementById(elements);
    console.log(fieldset);
    for (i = 0; i < classes.length; i++) {
      if (classes[i].checked == true) {
        // insert id and name into div here
        var id = classes[i].id;
        var name = classes[i].name;
        var inputfield = document.getElementById(hiddenInput);
        var nameField = document.getElementById(hiddenNames);
        inputfield.value += id + ",";
        nameField.value += name + ", ";
        fieldset.insertAdjacentHTML("beforeend", name + ", ");
        //fieldset.insertAdjacentHTML('beforeend',"<br><label class='AddOn[" + gg + "][1]' id='" + id + "' name ='" + name + "'>" + name + "</label>")
      } else {
        continue;
      }
    }
    var preEdit = document.getElementById(hiddenInput).value;
    var field = document.getElementById(hiddenInput);
    var postEdit = preEdit.slice(0, -1);
    field.value = postEdit;

    var preEditNames = document.getElementById(hiddenNames).value;
    var fieldName = document.getElementById(hiddenNames);
    var postEditNames = preEditNames.slice(0, -2);
    fieldName.value = postEditNames;

    var prefieldset = fieldset.innerHTML;
    var postfieldset = prefieldset.slice(0, -2);
    fieldset.innerHTML = postfieldset;

    section.insertAdjacentHTML(
      "beforeend",
      "<br><br><button type='button' name='" +
        gg +
        "xx' onclick='removeAddOn(this.name)'>x</button>"
    );
    gg++;
    closeAddOns();
  } else {
    closeAddOns();
  }
}

var ggg;
// openIOptions(name) here

function openIOptions(name) {
  document.getElementById("IOptions").style.display = "block";
  ggg = 0;
  var price = document.getElementById(name).childNodes[1].childNodes[0].id;
  var itemNat = document.getElementById(name).childNodes[1].childNodes[0].value;
  var prepTime = document.getElementById(name).childNodes[1].childNodes[1].id;
  var NatDescription =
    document.getElementById(name).childNodes[1].childNodes[1].value;
  var itemEng = document.getElementById(name).childNodes[1].childNodes[2].id;
  // var EngDescription = document.getElementById(name).childNodes[2].childNodes[0].innerHTML;
  var preCatID = document.getElementById(name).parentNode.id;

  // var itemSize = document.getElementById(name).childNodes[1].childNodes[5].value;

  var CatID = preCatID.slice(0, -1);

  var EditPrice = document.getElementById("EditItem[1][2]");
  var EditItemNat = document.getElementById("EditItem[1][1]");
  var EditPrepTime = document.getElementById("EditItem[1][6]");
  var EditNatDescription = document.getElementById("EditItem[1][5]");
  var EditItemEng = document.getElementById("EditItem[1][0]");
  var EditEngDescription = document.getElementById("EditItem[1][4]");
  var EditCategory = document.getElementById("EditItem[1][3]");
  var ItemID = document.getElementById("EditItem[1][7]");

  var editItemSize = document.getElementById("EditItem[1][9]");

  EditPrice.value = price;
  EditItemNat.value = itemNat;
  EditPrepTime.value = prepTime;
  EditNatDescription.value = NatDescription;
  EditItemEng.value = itemEng;
  // EditEngDescription.value = EngDescription;
  EditCategory.value = CatID;
  ItemID.value = name;

  // editItemSize.value = itemSize;

  //	var gggValue = document.getElementById('EditItem[1][8]').value;
  //ggg = parseInt(gggValue);

  var addOnDiv = document.getElementById("EditPassedAddOnDiv");

  addOnDiv.innerHTML = "";
  var addOns = document.getElementsByClassName(name + "addOn");

  if (addOns.length > 0) {
    for (i = 0; i < addOns.length; i++) {
      var ItemCatAddOnID = addOns[i].childNodes[0].name;
      var ItemCatAddOnEng = addOns[i].childNodes[0].value;
      var ItemCatAddOnNat = addOns[i].childNodes[1].value;
      var ItemCatMin = addOns[i].childNodes[2].name;
      var ItemCatMax = addOns[i].childNodes[2].value;
      var ItemAddOnIDs = addOns[i].childNodes[3].name;
      var ItemAddOnNames = addOns[i].childNodes[3].value;
      var ItemCatRequired = addOns[i].childNodes[4].value;

      console.log(ItemCatAddOnID);
      console.log(ItemAddOnNames);

      addOnDiv.insertAdjacentHTML(
        "beforeend",
        "<div id='" +
          ItemCatAddOnID +
          "'><br><fieldset id='" +
          i +
          "xyz'><label>Category name (English):</label><input type='text' id='EditAddOn[" +
          i +
          "][0]' name='EditAddOn[" +
          i +
          "][0]' required><br><label>Category name (Arabic):</label><input type='text' id='EditAddOn[" +
          i +
          "][1]' name='EditAddOn[" +
          i +
          "][1]' required><br><label>Required or optional?</label><select id='EditAddOn[" +
          i +
          "][2]' name='EditAddOn[" +
          i +
          "][2]'><option value='y'>required</option><option value='n'>optional</option></select><br><label>Minimum choices:</label><input type='number' id='EditAddOn[" +
          i +
          "][3]' name='EditAddOn[" +
          i +
          "][3]'><br><label>Maximum choices:</label><input type='number' id='EditAddOn[" +
          i +
          "][4]' name='EditAddOn[" +
          i +
          "][4]'><br><input type='hidden' id='EditAddOn[" +
          i +
          "][5]' name='EditAddOn[" +
          i +
          "][5]' value=''><input type='hidden' id='EditAddOn[" +
          i +
          "][6]' name='EditAddOn[" +
          i +
          "][6]' value=''><input type='hidden' id='EditAddOn[" +
          i +
          "][7]' name='EditAddOn[" +
          i +
          "][7]' value=''><label id='EditAddOn[" +
          i +
          "][8]'>" +
          ItemAddOnNames +
          "</label><br><br><button type='button' name='" +
          ItemCatAddOnID +
          "' onclick='removeAddOn(this.name)'>x</button></fieldset></div>"
      );

      var itemEngNameID = "EditAddOn[" + i + "][0]";
      var itemNatNameID = "EditAddOn[" + i + "][1]";
      var itemRequiredID = "EditAddOn[" + i + "][2]";
      var itemMinID = "EditAddOn[" + i + "][3]";
      var itemMaxID = "EditAddOn[" + i + "][4]";
      var itemAddOnIDsID = "EditAddOn[" + i + "][5]";
      var itemAddOnNamesID = "EditAddOn[" + i + "][6]";
      var itemCATIDID = "EditAddOn[" + i + "][7]";

      var itemEngName = document.getElementById(itemEngNameID);
      var itemNatName = document.getElementById(itemNatNameID);
      var itemRequired = document.getElementById(itemRequiredID);
      var itemMin = document.getElementById(itemMinID);
      var itemMax = document.getElementById(itemMaxID);
      var itemaddOnIdss = document.getElementById(itemAddOnIDsID);
      var itemaddOnNamess = document.getElementById(itemAddOnNamesID);
      var itemCatId = document.getElementById(itemCATIDID);

      itemEngName.value = ItemCatAddOnEng;
      itemNatName.value = ItemCatAddOnNat;
      itemRequired.value = ItemCatRequired;
      itemMin.value = ItemCatMin;
      itemMax.value = ItemCatMax;
      itemaddOnIdss.value = ItemAddOnIDs;
      itemaddOnNamess.value = ItemAddOnNames;
      itemCatId.value = ItemCatAddOnID;

      ggg++;
      var gggValue = document.getElementById("EditItem[1][8]");
      gggValue.value = ggg;
    }
  }
}
function EditAddOn() {
  document.getElementById("EditAddOns").style.display = "block";
}

function addOns() {
  document.getElementById("addOns").style.display = "block";
}
var xxx = 0;
function PassEditedAddOns() {
  var classes = document.getElementsByClassName("addOncheckbox");
  console.log(classes);

  var testing = 0;

  for (v = 0; v < classes.length; v++) {
    if (classes[v].checked == true) {
      testing++;
      break;
    }
  }

  if (testing == 1) {
    // insert div here
    var PassedAddOnDiv = document.getElementById("EditPassedAddOnDiv");
    PassedAddOnDiv.insertAdjacentHTML(
      "beforeend",
      "<div id='" +
        ggg +
        "yy'><br><fieldset id='" +
        ggg +
        "y'><label>Category name (English):</label><input type='text' id='EditAddOn[" +
        ggg +
        "][0]' name='EditAddOn[" +
        ggg +
        "][0]' required><br><label>Category name: (Arabic):</label><input type='text' id='EditAddOn[" +
        ggg +
        "][1]' name='EditAddOn[" +
        ggg +
        "][1]' required><br><label>Required or optional?:</label><select id='EditAddOn[" +
        ggg +
        "][2]' name='EditAddOn[" +
        ggg +
        "][2]'><option value='y'>required</option><option value='n'>optional</option></select><br><label>Minimum choices:</label><input type='number' id='EditAddOn[" +
        ggg +
        "][3]' name='EditAddOn[" +
        ggg +
        "][3]'><br><label>Maximum choices:</label><input type='number' id='EditAddOn[" +
        ggg +
        "][4]' name='EditAddOn[" +
        ggg +
        "][4]'><br><input type='hidden' id='EditAddOn[" +
        ggg +
        "][5]' name='EditAddOn[" +
        ggg +
        "][5]' value=''><input type='hidden' name='EditAddOn[" +
        ggg +
        "][6]' id='EditAddOn[" +
        ggg +
        "][7]' value=''><label id='EditAddOn[" +
        ggg +
        "][6]'></label></fieldset></div>"
    );

    //var fieldset = document.getElementById(gg + "x");
    var section = document.getElementById(ggg + "y");
    var elements = "EditAddOn[" + ggg + "][6]";
    var hiddenInput = "EditAddOn[" + ggg + "][5]";
    var hiddenNames = "EditAddOn[" + ggg + "][7]";
    console.log(elements);
    var fieldset = document.getElementById(elements);
    console.log(fieldset);
    for (i = 0; i < classes.length; i++) {
      if (classes[i].checked == true) {
        // insert id and name into div here
        var id = classes[i].id;
        var name = classes[i].name;
        var inputfield = document.getElementById(hiddenInput);
        var nameField = document.getElementById(hiddenNames);
        inputfield.value += id + ",";
        nameField.value += name + ", ";
        fieldset.insertAdjacentHTML("beforeend", name + ", ");
        //fieldset.insertAdjacentHTML('beforeend',"<br><label class='AddOn[" + gg + "][1]' id='" + id + "' name ='" + name + "'>" + name + "</label>")
      } else {
        continue;
      }
    }
    var preEdit = document.getElementById(hiddenInput).value;
    var field = document.getElementById(hiddenInput);
    var postEdit = preEdit.slice(0, -1);
    field.value = postEdit;

    var preEditNames = document.getElementById(hiddenNames).value;
    var fieldName = document.getElementById(hiddenNames);
    var postEditNames = preEditNames.slice(0, -2);
    fieldName.value = postEditNames;

    var prefieldset = fieldset.innerHTML;
    var postfieldset = prefieldset.slice(0, -2);
    fieldset.innerHTML = postfieldset;

    section.insertAdjacentHTML(
      "beforeend",
      "<br><br><button type='button' name='" +
        ggg +
        "yy' onclick='removeAddOn(this.name)'>x</button>"
    );
    ggg++;
    closeEditAddOns();
  } else {
    closeEditAddOns();
  }
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

// function searchItems() {
//   var searchField = document.getElementById("ItemSearch");
//   var filter = searchField.value.toUpperCase();
//   var searchTo = document.getElementsByClassName("search");

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < searchTo.length; i++) {
//     var s = searchTo[i].firstChild;
//     var txtValue = s.innerHTML;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       searchTo[i].style.display = "";
//     } else {
//       searchTo[i].style.display = "none";
//     }
//   }
// }
