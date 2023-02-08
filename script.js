// console.log('hello');
// const resumeSelector = document.querySelector('#resume-select');
// const resumeContainer = document.querySelector('#resume-container');

// resumeSelector.addEventListener('change', () => {
//   const selectValue = resumeSelector.value;

//   console.log(selectValue);
//   // console.log(typeof(selectValue))

//   const iframeDoc = resumeContainer.contentWindow;
//   console.log(iframeDoc);

//   iframeDoc.document.location.pathname =
//     "./resumes/Gautam Jain's Resume (2).pdf";

//   // const embedObject = iframeDoc.querySelector("embed")
//   // console.log(embedObject.src)
//   // embedObject.src = "resumes/Gautam Jain's Resume (2).pdf"
//   // console.log(embedObject.src)

//   switch (selectValue) {
//     case 'Resume 1':
//       const promise = new Promise((resolve, reject) => {
//         resolve(
//           (iframeDoc.document.location.pathname =
//             "./resumes/Gautam Jain's Resume (1).pdf")
//         );
//         reject('failed');
//       });

//       promise.then((res) => {console.log(res)})

//       // resumeContainer.setAttribute(
//       //   src,
//       //   "./resumes/Gautam Jain's Resume (1).pdf"
//       // );
//       break;
//     case 'Resume 2':

//       const promise2 = new Promise((resolve, reject) => {
//         resolve(
//           (iframeDoc.document.location.pathname =
//             "./resumes/Gautam Jain's Resume (2).pdf")
//         );
//         reject('failed');
//       });

//       promise2.then((res) => {
//         console.log(res);
//       });
//       // iframeDoc.document.location.pathname =
//       //   "./resumes/Gautam Jain's Resume (2).pdf";
//       // resumeContainer.setAttribute(
//       //   src,
//       //   "./resumes/Gautam Jain's Resume (2).pdf"
//       // );
//       break;
//     case 'Resume 3':
//       iframeDoc.document.location.pathname =
//         "./resumes/Gautam Jain's Resume (3).pdf";
//       break;
//     case 'Resume 4':
//       iframeDoc.document.location.pathname =
//         "./resumes/Gautam Jain's Resume.pdf";
//       break;
//     default:
//     //   resumeContainer.src = "./resumes/Gautam Jain's Resume (1).pdf";
//   }
// });

const resumeContainer1 = document.getElementById('resume-container-1');
const resumeContainer2 = document.getElementById('resume-container-2');
const resumeContainer3 = document.getElementById('resume-container-3');
const resumeContainer4 = document.getElementById('resume-container-4');
const resumeSelector = document.getElementById('resume-select');

resumeSelector.value = resumeContainer1;

resumeContainer1.style.display = 'block';
resumeContainer2.style.display = 'none';
resumeContainer3.style.display = 'none';
resumeContainer4.style.display = 'none';

resumeSelector.addEventListener('change', () => {
  //   console.log(resumeSelector.value);
  const val = resumeSelector.value;
  if (val == 'resume-1') {
    resumeContainer1.style.display = 'block';
    resumeContainer2.style.display = 'none';
    resumeContainer3.style.display = 'none';
    resumeContainer4.style.display = 'none';
  } else if (val == 'resume-2') {
    resumeContainer1.style.display = 'none';
    resumeContainer2.style.display = 'block';
    resumeContainer3.style.display = 'none';
    resumeContainer4.style.display = 'none';
  } else if (val == 'resume-3') {
    resumeContainer1.style.display = 'none';
    resumeContainer2.style.display = 'none';
    resumeContainer3.style.display = 'block';
    resumeContainer4.style.display = 'none';
  } else if (val == 'resume-4') {
    resumeContainer1.style.display = 'none';
    resumeContainer2.style.display = 'none';
    resumeContainer3.style.display = 'none';
    resumeContainer4.style.display = 'block';
  }
});
