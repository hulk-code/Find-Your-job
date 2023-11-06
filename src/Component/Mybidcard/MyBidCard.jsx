

const MyBidCard = ({book}) => {
    const{JobTitle,Deadline,price,email,owneremail}=book
    return (
        <tr className="hover">
       
        <td>{JobTitle}</td>
        <td>{Deadline}</td>
        <td>{email}</td>
        <td>{}</td>
      </tr>
    );
};

export default MyBidCard;