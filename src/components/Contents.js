const Contents = ({choice}) => {
    console.log(choice);
    
    return(
        <>
        {choice === 1 ? <>favorite cat images</> : <>random cat images</>}
        </>
    // <Row>
    //     <Col>
    //         <ImgCard />
    //     </Col>
    // </Row>
    )
}
export default Contents