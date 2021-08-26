import React from 'react'

const Calendar = () => {

    const componentDidMount = () => {
        const { match: { params } } = this.props;
      
        fetch(`/tasks/user/${params.user_id}`)
          .then(({ data: user }) => {
            console.log('user', user);
      
            this.setState({ user });
          });
      }
    
    return (
        <div>
            <h1>Ahoy there!</h1>
            
        </div>
    )
}

export default Calendar;
