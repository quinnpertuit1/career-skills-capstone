
class SelectDegree extends React.Component {
  constructor(props) {
    super();
    this.state = {selectValue:'Select Degree'};
    this.handleDegreeChange=this.handleDegreeChange.bind(this)
  }

  handleDegreeChange(e) {
    this.setState({
      selectValue: e.target.value
    })
    this.props.appHandleDegreeChange(e.target.value)
  }

  render() {
    return (
      <div className="col-lg-1">
        <select name="SelectDegree" placeholder="Degree" value={this.state.selectValue} onChange={this.handleDegreeChange}>
          <option defaultValue="Select Degree" disabled>Select Degree</option>
          <option value="Associates">Associates</option>
          <option value="Bechelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="Ph.D.">Ph.D.</option>
          <option value="PostDoc">PostDoc</option>
        </select>
      </div>
    );
  }
}

class Title extends React.Component {
  constructor() {
    super();
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleTitleChange(e) {
    this.props.appHandleTitleChange(e.target.value)
  }

  render() {
    return (
      <div className="col-lg-1">
        <input
          type='text'
          placeholder="Enter Job Title"
          onChange={this.handleTitleChange} />
      </div>
    );
  }
}

class School extends React.Component {
  constructor() {
    super();
    this.handleSchoolChange = this.handleSchoolChange.bind(this)
  }

  handleSchoolChange(e) {
    this.props.appHandleSchoolChange(e.target.value)
  }

  render() {
    return (
      <div className="col-lg-1">
        <input
          type='text'
          placeholder="Enter School"
          onChange={this.handleSchoolChange} />
      </div>
    );
  }
}

class Company extends React.Component {
  constructor() {
    super();
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
  }

  handleCompanyChange(e) {
    this.props.appHandleCompanyChange(e.target.value)
  }

  render() {
    return (
      <div className="col-lg-1">
        <input
          type='text'
          placeholder="Enter Company"
          onChange={this.handleCompanyChange} />
      </div>
    );
  }
}

class From extends React.Component {
  constructor() {
    super();
    this.handleFromChange = this.handleFromChange.bind(this)
  }

  handleFromChange(e) {
    this.props.appHandleFromChange(e.target.value)
  }

  render() {
    return (
      <div float="left">
      <input type='date' placeholder={this.props.value} onChange={this.handleFromChange}/>
      </div>
    );
  }
}

class WorkFrom extends React.Component {
  constructor() {
    super();
    this.handleWorkFromChange = this.handleWorkFromChange.bind(this)
  }

  handleWorkFromChange(e) {
    this.props.appHandleWorkFromChange(e.target.value)
  }

  render() {
    return (
      <div>
      <input type='date' placeholder={this.props.value} onChange={this.handleWorkFromChange}/>
      </div>
    );
  }
}

class To extends React.Component {
  constructor() {
    super();
    this.handleToChange = this.handleToChange.bind(this)
  }

  handleToChange(e) {
    this.props.appHandleToChange(e.target.value)
  }

  render() {
    return (
      <div float="left">
      <input type='date' placeholder={this.props.value} onChange={this.handleToChange}/>
      </div>
    );
  }
}

class WorkTo extends React.Component {
  constructor() {
    super();
    this.handleWorkToChange = this.handleWorkToChange.bind(this)
  }

  handleWorkToChange(e) {
    this.props.appHandleWorkToChange(e.target.value)
  }

  render() {
    return (
      <div float="left">
        <input type='date' placeholder={this.props.value} onChange={this.handleWorkToChange}/>
      </div>
    );
  }
}

class WorkDescription extends React.Component {
  constructor() {
    super();
    this.handleWorkDescriptionChange = this.handleWorkDescriptionChange.bind(this)
  }

  handleWorkDescriptionChange(e) {
    this.props.appHandleWorkDescriptionChange(e.target.value)
  }

  render() {
    return (
      <div className="col-lg-1">
        <h4 htmlFor="job description">Job Description:</h4>
        <textarea float="none" rows='5' cols='100' onChange={this.handleWorkDescriptionChange}/>
      </div>
    )
  }
}

class AddEducation extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-success" onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

class AddWork extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-success" onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

class RemoveLastEducation extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-warning" onClick={this.handleClick}>Remove Last Added</button>
      </div>
    )
  }
}

class Startover extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-warning" onClick={this.handleClick}>Start from scratch</button>
      </div>
    )
  }
}

class RemoveLastWork extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-warning" onClick={this.handleClick}>Remove Last Added</button>
      </div>
    )
  }
}

const EducationStyle = {
  display: 'flex'
}

class Education extends React.Component {
  render() {
    return (
      <div className="col">
      <div className="row" style={EducationStyle}>
        <SelectDegree appHandleDegreeChange={this.props.appHandleDegreeChange} />
        <School appHandleSchoolChange={this.props.appHandleSchoolChange}/>
        <From appHandleFromChange={this.props.appHandleFromChange}/>
        <To appHandleToChange={this.props.appHandleToChange}/>
      </div>
      <div style={WorkStyle}>
        <AddEducation handleClick={this.props.appHandleAddEducation}/>
        <Startover handleClick={this.props.appHandleStartoverEducation}/>
      </div>
      </div>
    )
  }
}

const WorkStyle = {
  display: 'flex'
}

class Work extends React.Component {
  render() {
    return (
      <div className="col">
      <div className="row" style={WorkStyle}>
        <Title appHandleTitleChange={this.props.appHandleTitleChange} />
        <Company appHandleCompanyChange={this.props.appHandleCompanyChange}/>
        <WorkFrom appHandleWorkFromChange={this.props.appHandleWorkFromChange}/>
        <WorkTo appHandleWorkToChange={this.props.appHandleWorkToChange}/>
      </div>
      <div className="row" style={WorkStyle}>
        <WorkDescription appHandleWorkDescriptionChange={this.props.appHandleWorkDescriptionChange}/>
      </div>
      <div style={WorkStyle}>
        <AddWork handleClick={this.props.appHandleAddWork}/>
        <Startover handleClick={this.props.appHandleStartoverWork}/>
      </div>
      </div>
    )
  }
}

class Summary extends React.Component {
  render() {
    return (
      <div>
      <h1> Summary of Current Input </h1>
      <h3>Education</h3>
      <ul className="EducationSummary">
        {this.props.summary.Education.map(m => {
            return (
              <li k={m.id}>
                <div>
                  {m.From} - {m.To}, {m.Degree} Degree, {m.School}
                </div>
              </li>
            )
          })}
       </ul>
      <h3>Work Experience</h3> 
      <ul className="WorkSummary">
        {this.props.summary.Work.map(m => {
            return (
              <li k={m.id}>
                <div>
                  {m.From} - {m.To}, {m.Title}, {m.Company}
                </div>
                <div>
                  {m.Description}
                </div>
              </li>
            )
          })}
       </ul>
       </div>
    )
  }
       //<p> {this.props.testMessage} </p>
}

const MockSummary = {
  Education: [
    {
      Degree: "Master",
      School: "UC Berkeley",
      From: "2013-01-01",
      To: "2015-02-03"
    },
    {
      Degree: "Bechlor",
      School: "UC Berkeley",
      From: "2009-01-01",
      To: "2013-02-03"
    }
  ],
  Work: [
      {
        Title: "Software Engineer",
        Company: "Motorola",
        From: "2010-03-06",
        To: "2011-05-09",
        Description: "creat web page"
      }
  ]
}

const EmptySummary = {Education:[],Work:[]}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      summary: EmptySummary,
      currentSelectedDegree: "",
      currentSchool:"",
      currentFrom:"",
      currentTo:"",
      currentTitle: "",
      currentCompany: "",
      currentWorkFrom: "",
      currentWorkTo: "",
      currentWorkDescription: "",
      resultSimilarJobs:"no response yet",
      resultSkillSet:"no response yet"
    }
    this.handleDegreeChange=this.handleDegreeChange.bind(this)
    this.handleSchoolChange=this.handleSchoolChange.bind(this)
    this.handleFromChange=this.handleFromChange.bind(this)
    this.handleToChange=this.handleToChange.bind(this)
    this.handleAddEducation=this.handleAddEducation.bind(this)
    this.handleStartoverEducation=this.handleStartoverEducation.bind(this)
    this.handleTitleChange=this.handleTitleChange.bind(this)
    this.handleCompanyChange=this.handleCompanyChange.bind(this)
    this.handleWorkFromChange=this.handleWorkFromChange.bind(this)
    this.handleWorkToChange=this.handleWorkToChange.bind(this)
    this.handleWorkDescriptionChange=this.handleWorkDescriptionChange.bind(this)
    this.handleAddWork=this.handleAddWork.bind(this)
    this.handleStartoverWork=this.handleStartoverWork.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleDegreeChange(m) {
    this.setState({
      currentSelectedDegree: m
    })
  }

  handleTitleChange(m) {
    this.setState({
      currentTitle: m
    })
  }

  handleSchoolChange(m) {
    this.setState({
      currentSchool: m
    })
  }

  handleCompanyChange(m) {
    this.setState({
      currentCompany: m
    })
  }

  handleFromChange(m) {
    this.setState({
      currentFrom: m
    })
  }

  handleWorkFromChange(m) {
    this.setState({
      currentWorkFrom: m
    })
  }

  handleToChange(m) {
    this.setState({
      currentTo: m
    })
  }

  handleWorkToChange(m) {
    this.setState({
      currentWorkTo: m
    })
  }

  handleWorkDescriptionChange(m) {
    this.setState({
      currentWorkDescription: m
    })
  }

  handleAddEducation() {
    const sum = this.state.summary
    sum.Education.push({
      Degree: this.state.currentSelectedDegree,
      School: this.state.currentSchool,
      From: this.state.currentFrom,
      To: this.state.currentTo
    })
    this.setState({
      summary: sum
    })
    this.setState({
      currentSelectedDegree: "",
      currentSchool: "",
      currentFrom: "",
      currentTo: ""
    })
  }

  handleAddWork() {
    const sum = this.state.summary
    sum.Work.push({
      Title: this.state.currentTitle,
      Company: this.state.currentCompany,
      From: this.state.currentWorkFrom,
      To: this.state.currentWorkTo,
      Description: this.state.currentWorkDescription
    })
    this.setState({
      summary: sum
    })
    this.setState({
      currentTitle: "",
      currentCompany: "",
      currentWorkFrom: "",
      currentWorkTo: "",
      currentWorkDescription: ""
    })
  }

  handleRemoveLastEducation() {
    const sum = this.state.summary
    const last = sum.Education[sum.Education.length - 1]
    this.setState({
      currentSelectDegree: last.Degree,
      currentSchool: last.School,
      currentFrom: last.From,
      currentTo: last.To
    })
    sum.Education.splice(-1,1)
    this.setState({summary: sum })
  }
  
  handleStartoverEducation() {
    const sum = this.state.summary
    sum.Education = []
    this.setState({
      summary: sum, 
      currentSelectedDegree: "",
      currentSchool: "",
      currentFrom: "",
      currentTo: ""
    })
  }
    
  handleStartoverWork() {
    const sum = this.state.summary
    sum.Work = []
    this.setState({
      currentTitle: "",
      currentCompany: "",
      currentWorkFrom: "",
      currentWorkTo: "",
      currentWorkDescription: ""
    })
  }
    
  handleRemoveLastWork() {
    const sum = this.state.summary
    const last = sum.Work[sum.Work.length - 1]
    this.setState({
      currentTitle: last.Title,
      currentCompany: last.Company,
      currentWorkFrom: last.From,
      currentWorkTo: last.To,
      currentWorkDescription: last.Description
    })
    sum.Work.splice(-1,1)
    this.setState({summary: sum })
  }

  htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
  }


  handleSubmit() {
    const sum = this.state.summary
    const last = sum.Work[sum.Work.length - 1]
    const lastTitle = last.Title
    const lastDescription = last.Description
    axios.get($SCRIPT_ROOT + '/postSummary', {
            headers: { 'crossOrigin': true, 'x-career-climber-lastTitle': lastTitle, 'x-career-climber-lastDescription': lastDescription}
          }).then(response => this.setState({resultSimilarJobs: response.data}))
          //.then(response => console.log(response))
    axios.get($SCRIPT_ROOT + '/getSkillSet', {
            headers: { 'crossOrigin': true, 'x-career-climber-lastTitle': lastTitle}
          }).then(response => this.setState({resultSkillSet: response.data}))
  }

  render() {
    return (
      <div className="app">
        <h1>Education</h1>
        <Education title="Education" appHandleDegreeChange={this.handleDegreeChange} appHandleSchoolChange={this.handleSchoolChange} appHandleFromChange={this.handleFromChange} appHandleToChange={this.handleToChange} appHandleAddEducation={this.handleAddEducation} appHandleStartoverEducation={this.handleStartoverEducation} currentSummary = {this.state.summary.Education}/>
        <h1>Work</h1>
        <Work title="Work" appHandleTitleChange={this.handleTitleChange} appHandleCompanyChange={this.handleCompanyChange} appHandleWorkFromChange={this.handleWorkFromChange} appHandleWorkToChange={this.handleWorkToChange} appHandleWorkDescriptionChange={this.handleWorkDescriptionChange} appHandleAddWork={this.handleAddWork} appHandleStartoverWork={this.handleStartoverWork} currentSummary = {this.state.summary.Work}/>
        <Summary summary={this.state.summary} testMessage={this.state.currentSelectedDegree +" " + this.state.currentSchool + " " + this.state.currentFrom + " " + this.state.currentTo + this.state.currentDescription}/>
        <div className="col">
          <br/>
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}> Submit Resume </button>
          <h1>Result</h1>
          <h3>Similar Jobs</h3>
          <div dangerouslySetInnerHTML={{__html: this.state.resultSimilarJobs}} />
          <h3>Skill Set</h3>
          <div dangerouslySetInnerHTML={{__html: this.state.resultSkillSet}} />
          <div>
            <h1>End of Result</h1>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);
