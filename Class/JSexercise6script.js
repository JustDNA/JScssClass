		var nvp = {"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","0":"zero","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"forteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety"};

		var nvp2={"0":"", "1":"", "2":"hundred", "3":"thousand", "5":"lakh"};
			
		function temp (num) {
			var number = "";
			if(num.length > 7){
				return "Invalid entry. Max 7 digits allowed";
			}
			var diff = 7-num.length;
			while(diff--){
				num = "0" + num;
			}
			var lakhs = doubleDigit(num.substring(0,2));
			if(lakhs != ""){
				number = lakhs + "lakh ";
			}
			var thousand = doubleDigit(num.substring(2,4));
			if(thousand != ""){
				number = number + thousand + "thousand ";
			}
			if(num[4] != "0"){
				number = number + nvp[num[4]] + " " + "hundred "
			}
			var db = doubleDigit(num.substring(5,7));
			if(db != ""){
				if(number == ""){
					return db;
				}
				number = number + " and " + db;
			}
			return number;
		}

		function doubleDigit (db) {
			if(db.length < 2){
				return nvp[db[0]] + " ";
			}
			if(db == "10"){
				return "ten ";
			}
			if(db[0] == '0'){
				if (db[1] == '0') {
					return "";
				};
				return nvp[db[1]] + " ";
			}else{
				if((db[0] == '1') || (db[1] == '0')){
					return nvp[db] + " ";
				}else{
					return nvp[db[0]+"0"] + " " + nvp[db[1]] + " ";	
				}
			}
		}

		String.prototype.numWords = function () {
        	return temp(this);
   		};