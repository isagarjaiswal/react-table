// // import './App.css';
// import { useState } from 'react';

// export default function App() {

//   const [header, setHeader] = useState([]);
//   const [body, setBody] = useState([]);
//   const [search, setSearch] = useState({ searchVal: "", idx: 0 });
//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={() => {
//           const newHeader = [...header, { name: `Col ${header.length}` }];
//           setHeader(newHeader);
//           body.forEach((obj, idx) => {
//             obj.cells.push(
//               {
//                 cellName: `Row ${body.length}-${header.length}`
//               }
//             )
//           })
//         }}>Add Column </button>

//         <button onClick={() => {
//           const newBody = [...body, {
//             name: `Row ${body.length}-${header.length}`,
//             cells: header.map((obj, idx) => ({
//               cellName: `Row ${body.length}-${header.length}`,
//               id: idx
//             }))
//           }];
//           setBody(newBody);
//         }}>Add Row </button>
//       </header>
//       <table className='Container'>
//         <thead >
//           {
//             header.map((obj, idx) => {
//               return (
//                 <ColumnElement id={idx} name={obj.name} setHeader={setHeader} setSearch={setSearch} />
//               )
//             })
//           }

//         </thead>
//         <tbody>
//           {
//             body.map((obj, idx) => {
//               if (obj.cells[search.idx].cellName.includes(search.searchVal))
//                 return <RowElement id={idx} name={obj.name} cells={obj.cells} setBody={setBody} />
//               else return;
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function ColumnElement(props) {
//   let { id, name, setHeader, setSearch } = props
//   return (
//     <th id={id} className='columnInput'>
//       <input type='text' id={`col-name-${id}`} value={name} onChange={(e) => {
//         setHeader(header => {
//           header[id].name = e.target.value;
//           return [...header];
//         })
//       }} placeholder={name} />
//       <input type='search' id={id} placeholder='search' onChange={(e) => {
//         setSearch((search) => {
//           search.searchVal = e.target.value;
//           search.idx = id;
//           return { ...search };
//         });
//       }} />
//     </th>
//   )
// }

// function RowElement(props) {
//   const { id = 0, cells, setBody } = props;
//   return (
//     <tr id='row'>
//       {
//         cells.map((cellobj, index) => {
//           return <td key={index}>
//             <textarea id={id} value={cellobj.cellName} onChange={(e) => {
//               setBody((body) => {
//                 body[id].cells[index].cellName = e.target.value;
//                 return [...body]
//               })

//             }} /></td>
//         })
//       }
//     </tr>
//   )
// }