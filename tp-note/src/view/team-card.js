export default {
    props: {
        id: Number,
        name: String,
        description: String
    },
    computed:{
        descriptionCourte(){
            return this.description.substr(0,20);
        }
    },
    template:`
        <div class= "team-card">
            <h3> Team Id </h3> 
            <p> {{ id }}</p>
            <h3> Nom </h3> 
            <p> {{ name }}</p>
            <h3> Description </h3> 
            <p> {{ descriptionCourte }} </p>
        </div>
    `
}