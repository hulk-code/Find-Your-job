

const MyBidCard = ({book}) => {
    const{JobTitle,Deadline,price,email,owneremail}=book
    return (
        <tr>
        <td className="bg-blue-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">{JobTitle}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800"> {email}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">{Deadline}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
        </td>
      </tr>
    );
};

export default MyBidCard;