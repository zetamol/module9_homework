const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`; 
function transformXml(strXml) {
  let parser = new DOMParser();
	let xmlDOM = parser.parseFromString(strXml, "text/xml");
	let listNodes = xmlDOM.querySelector("list");
  let studentsNodes = listNodes.querySelectorAll("student");
	let result = {list: []};
 
	studentsNodes.forEach((element) => {
		let student = new Object();
	  let FirstName = element.querySelector("first");
		let SecondName = element.querySelector("second");
	  let Age = element.querySelector("age");
	  let Prof = element.querySelector("prof");
	  let nameNode = element.querySelector("name");
	  let nameLang = nameNode.getAttribute("lang");
	  student.name = FirstName.textContent+ ' ' +SecondName.textContent; 
	  student.age = Number(Age.textContent);
	  student.prof = Prof.textContent;
	  student.lang = nameLang;
	  result.list.push(student);
	
    });
    console.log(result); 
}
transformXml(xmlString);