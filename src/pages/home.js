import "./home.css";
import { useState } from "react";
import { CSVLink } from 'react-csv';
function Home() {
    const cursorMoverRight = (sec, index) => {

        const nextField = document.getElementById(sec.split(' ').join('') + (index + 1).toString());
        if (nextField !== null) nextField.select();
    }
    const cursorMoverLeft = (sec, index) => {
        const previousField = document.getElementById(sec.split(' ').join('') + (index - 1).toString());
        if (previousField !== null) previousField.select();
    }
    const generalMovement = (cellVal, index, sec) => {
        if (cellVal.length === 1) cursorMoverRight(sec, index);
        if (cellVal === '') cursorMoverLeft(sec, index);
    }
    const generalMovementTwoChar = (cellVal, index, sec) => {
        if (cellVal.length === 2) cursorMoverRight(sec, index);
        if (cellVal === '') cursorMoverLeft(sec, index);
    }
    const newData = (cellVal, index, prevArr) => {
        const newArr = [...prevArr];
        if (cellVal === '') newArr[index] = '';
        if (parseInt(cellVal) < 10 && parseInt(cellVal) > -1) newArr[index] = parseInt(cellVal);
        return newArr;
    }
    const handleDateValueInField = (date) => {
        const value = date.split('/');
        const newValue = [];
        value.forEach(element => {
            newValue.unshift(element)
        });
        return newValue.join('-')
    }
    const valueInputField = (sec, index) => {
        switch (sec) {
            case 'Patient ID':
                if (patientID[index] === '') return '';
                return patientID[index];
            case 'Bio Total':
                if (bioTotal[index] === '') return '';
                return bioTotal[index]
            case 'Life Style Total':
                if (lifeStyleTotal[index] === '') return '';
                return lifeStyleTotal[index]
            case 'Med Total':
                if (medTotal[index] === '') return '';
                return medTotal[index]
            case 'Blood Total':
                if (bloodTotal[index] === '') return '';
                return bloodTotal[index]
            case 'Total Risks':
                if (totalRisk[index] === '') return '';
                return totalRisk[index]
            case 'Rec':
                if (recommendation[index] === '') return '';
                return recommendation[index]
            default:
                return 0
        }
    }
    const moveToField = (event, sec, index) => {
        if (event.keyCode === 37) {
            cursorMoverLeft(sec, index);
        }
        if (event.keyCode === 39) {
            cursorMoverRight(sec, index);
        }
    }
    //----------------------------------------------//
    //-------------upper sec states-----------------//
    //----------------------------------------------//

    const [labNum, setLabNum] = useState('');
    const handleLabNum = (e) => {
        let cellVal = e.target.value;
        if (parseInt(cellVal) > 99) cellVal = 99;
        if (parseInt(cellVal) < 0) cellVal = 0;
        if (cellVal.length === 2) {
            generalMovementTwoChar(cellVal, 0, 'Worder ID')
        }
        if (cellVal !== '') cellVal = parseInt(cellVal);

        setLabNum(cellVal);
    }
    const [workerId, setWorkerId] = useState('');
    const handleWorkerId = (e) => {
        const value = (e.target.value).toUpperCase();
        if (value.length < 4) setWorkerId(value);
    }
    const [date, setDate] = useState('');
    const handleDate = (e) => {
        const value = (e.target.value).split('-');
        const newValue = [];
        value.forEach(element => {
            newValue.unshift(element)
        });
        setDate(newValue.join('/'));
    }
    const [time, setTime] = useState('');
    const handleTime = (e) => {
        const value = e.target.value;
        setTime(value);
    }

    const [highWage, setHighWage] = useState('');
    const handleHighWage = (e) => {
        let cellVal = e.target.value;
        if (parseInt(cellVal) > 1) cellVal = 1;
        if (parseInt(cellVal) < 0) cellVal = 0;
        if (cellVal !== '') cellVal = parseInt(cellVal);
        setHighWage(cellVal);
    }
    //----------------------------------------------//
    //---------------lab sec states ----------------//
    //----------------------------------------------//

    const [patientID, setPatientID] = useState(['', '', '', '']);
    const handlePatientID = (e, index) => {
        let cellVal = e.target.value;
        if (parseInt(cellVal) > 4) cellVal = 4;
        if (parseInt(cellVal) < 0) cellVal = 0;
        generalMovement(cellVal, index, 'Patient ID');
        setPatientID(newData(cellVal, index, patientID));
    }
    const [bioTotal, setBioTotal] = useState(['', '', '', '']);
    const handleBioTotal = (e, index) => {
        let cellVal = e.target.value;
        generalMovement(cellVal, index, 'Bio Total');
        setBioTotal(newData(cellVal, index, bioTotal));
    }
    const [lifeStyleTotal, setLifeStyleTotal] = useState(['', '', '', '']);
    const handleLifeStyleTotal = (e, index) => {
        let cellVal = e.target.value;
        generalMovement(cellVal, index, 'Life Style Total');
        setLifeStyleTotal(newData(cellVal, index, lifeStyleTotal));
    }
    const [medTotal, setMedTotal] = useState(['', '', '', '']);
    const handleMedTotal = (e, index) => {
        let cellVal = e.target.value;
        const newArr = [...medTotal];
        newArr[index] = cellVal;
        generalMovementTwoChar(cellVal, index, 'Med Total');
        setMedTotal(newArr);
    }
    const [bloodTotal, setBloodTotal] = useState(['', '', '', '']);
    const handleBloodTotal = (e, index) => {
        let cellVal = e.target.value;
        generalMovement(cellVal, index, 'Blood Total');
        setBloodTotal(newData(cellVal, index, bloodTotal));
    }
    const [totalRisk, setTotalRisk] = useState(['', '', '', '']);
    const handleTotalRisk = (e, index) => {
        let cellVal = e.target.value;
        const newArr = [...totalRisk];
        newArr[index] = cellVal;

        setTotalRisk(newArr);
        generalMovementTwoChar(cellVal, index, 'Total Risks')
    }
    const [recommendation, setRecommendation] = useState(['', '', '', '']);
    const handleRecommendation = (e, index) => {
        let cellVal = e.target.value;
        if (parseInt(cellVal) > 2) cellVal = 2;
        if (parseInt(cellVal) < 0) cellVal = 0;
        generalMovement(cellVal, index, 'Rec');
        setRecommendation(newData(cellVal, index, recommendation));
    }
    //----------------------------------------------//
    //---------------- table sec -------------------//
    //----------------------------------------------//
    const [dataTable, setDataTable] = useState([]);
    const [csv, setCsv] = useState('');
    const handleReset = () => {
        setLabNum('');
        setPatientID(['', '', '', '']);
        setWorkerId('');
        setHighWage('');
        setTime('');
        setDate('');
        setBioTotal(['', '', '', '']);
        setLifeStyleTotal(['', '', '', '']);
        setMedTotal(['', '', '', '']);
        setBloodTotal(['', '', '', '']);
        setTotalRisk(['', '', '', '']);
        setRecommendation(['', '', '', '']);
        setCsv('');
        setDataTable([]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataForCsv = [...dataTable];

        [0, 1, 2, 3].forEach((elm, i) => {
            let timeFormat = time.split(':').join('h');
            timeFormat += 'min';
            dataForCsv.push([
                labNum, patientID[i], workerId, highWage,
                timeFormat, date, bioTotal[i], lifeStyleTotal[i],
                medTotal[i], bloodTotal[i], totalRisk[i],
                recommendation[i]
            ]);
        });
        setLabNum('');
        setPatientID(['', '', '', '']);
        setWorkerId('');
        setHighWage('');
        setTime('');
        setDate('');
        setBioTotal(['', '', '', '']);
        setLifeStyleTotal(['', '', '', '']);
        setMedTotal(['', '', '', '']);
        setBloodTotal(['', '', '', '']);
        setTotalRisk(['', '', '', '']);
        setRecommendation(['', '', '', '']);

        let csvFormat = 'medicalLabID,patientID,workerID,highWage,time,date,bioTotal,lifestyleTotal,medTotal,bloodTotal,totalRisk,Rec\n';

        dataForCsv.forEach((row, i) => {
            csvFormat += row.join(',');
            csvFormat += '\n';
        });
        setCsv(csvFormat);
        setDataTable(dataForCsv);
    }
    const currentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0'); // add leading zero if necessary
        const minutes = String(now.getMinutes()).padStart(2, '0'); // add leading zero if necessary
        const seconds = String(now.getSeconds()).padStart(2, '0'); // add leading zero if necessary
        const formattedDate = `DATE${year}-${month}-${day}TIME${hours}:${minutes}:${seconds}`;
        return formattedDate;
    }

    return (
        <div className="Home">
            <form className="workerInput" onSubmit={handleSubmit}>
                <h2>Worker Details:</h2>
                <div className="inputFields">
                    <input
                        placeholder="Lab Number"
                        type="number"
                        value={labNum}
                        onChange={handleLabNum}
                    ></input>
                    <input
                        id="WorderID1"
                        placeholder="Worder ID"
                        type="text"
                        value={workerId}
                        onChange={handleWorkerId}
                    >
                    </input>
                    <input
                        placeholder="Date"
                        type="date"
                        value={handleDateValueInField(date)}
                        onChange={handleDate}
                    >
                    </input>
                    <input
                        placeholder="Time"
                        type="time"
                        value={time}
                        onChange={handleTime}
                    >
                    </input>
                    <input
                        placeholder="High Wage (0/1)"
                        type="number"
                        value={highWage}
                        onChange={handleHighWage}
                    >
                    </input>
                </div>
                <h2>Lab Details</h2>
                <div className="inputFieldLab">
                    {
                        [
                            'Patient ID',
                            'Bio Total',
                            'Life Style Total',
                            'Med Total',
                            'Blood Total',
                            'Total Risks',
                            'Rec'
                        ].map(
                            (sec, i) =>
                                <label key={i.toString()} id={sec}>
                                    {`${sec} : `}
                                    {
                                        [0, 1, 2, 3].map((elem, j) =>
                                            <input key={j.toString()}
                                                id={sec.split(' ').join('') + j.toString()}
                                                placeholder={sec}
                                                type="number"
                                                value={valueInputField(sec, j)}
                                                onKeyDown={(event) => moveToField(event, sec, j)}
                                                onChange={
                                                    (e) => {
                                                        switch (sec) {
                                                            case 'Bio Total':
                                                                handleBioTotal(e, j);
                                                                break;
                                                            case 'Life Style Total':
                                                                handleLifeStyleTotal(e, j);
                                                                break;
                                                            case 'Med Total':
                                                                handleMedTotal(e, j);
                                                                break;
                                                            case 'Blood Total':
                                                                handleBloodTotal(e, j);
                                                                break;
                                                            case 'Total Risks':
                                                                handleTotalRisk(e, j);
                                                                break;
                                                            case 'Rec':
                                                                handleRecommendation(e, j);
                                                                break;
                                                            case 'Patient ID':
                                                                handlePatientID(e, j);
                                                                break;
                                                            default:
                                                                console.log('Error in switch case sec.');
                                                                break;
                                                        }

                                                    }

                                                }
                                            >
                                            </input>)}
                                </label>)
                    }
                </div>
                <button>Add</button>
            </form>

            <div className="viewer">
                <div className="reset" onClick={handleReset}>ResetBoard</div>
                <table >
                    <thead>
                        <tr>
                            <th>medicalLabID</th>
                            <th>patientID</th>
                            <th>workerID</th>
                            <th>highWage</th>
                            <th>time</th>
                            <th>date</th>
                            <th>bioTotal</th>
                            <th>lifestyleTotal</th>
                            <th>medTotal</th>
                            <th>bloodTotal</th>
                            <th>totalRisk</th>
                            <th>Rec</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataTable.map(
                                (row, j) => <tr key={(j).toString()}>
                                    {
                                        row.map((data, i) =>
                                            <td key={(i + j).toString()}>{data}</td>
                                        )
                                    }
                                </tr>)}
                    </tbody>
                </table>
                <CSVLink className="export" data={csv} filename={`$studiesData-${currentDate()}`}>ExportCsv</CSVLink>

            </div>


        </div>
    );
}

export default Home;