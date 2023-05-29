


const CandidateRow = ({candidate, hide}) => {
    const {firstName, lastName, phoneNumber, email, notes} = candidate

    return(
        <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
       {!!hide && <td>{notes}</td>}
      </tr>
    )
}
export default CandidateRow;