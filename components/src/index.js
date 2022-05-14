import ApprovalCard from "./ApprovalCard";
import CommentDetails from "./CommentDetails";
import React from "react";
import ReactDOM  from "react-dom";
import faker from '@faker-js/faker';


if(module.hot){
    module.hot.accept();
}

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetails 
                    author="Sam" 
                    dateTime="Today at 6:00PM" 
                    text="Looking Good!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails 
                    author="Alex" 
                    dateTime="Yesterday at 7:00AM" 
                    text="Great!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails 
                    author="Rajesh" 
                    dateTime= "Today at 8:00PM" 
                    text="Nice!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails 
                    author="Ellie" 
                    dateTime="Today at 4:00PM" 
                    text="Nice photo!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));