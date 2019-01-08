import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from '../components/Course';

const SPACE_ID ='xetx13w3tady';
const ACCESS_TOKEN='e2f4271c3f68cd852814c9775f1b3ea53fe68fb397735e5d29c01e521f554fc5';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken:ACCESS_TOKEN
})

class CourseList extends Component {
    state ={
        courses:[],
        searchString:''cd bmaui
    }
    constructor() {
        super()
        this.getCourses()
    }

    getCourses = () => {
        client.getEntries({
            content_type:'course',
            query: this.state.earchString
        })
        .then((repsonse) =>  {
            this.setState({courses: Response.items})
        })
        .catch((error) => {
            console.log('Error')
            console.log(error)
        })
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({serachString: event.target.value})
        } else {
            this.setState({searchString:''})
        }
        this.getCourses();
    }
    render() {
        return(
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding:24}}>
                            {this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>

                )
                : "No courses found"}
            </div>
        )
    }
    
}

export default CourseList;