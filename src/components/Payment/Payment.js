import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import {
	CardElement,
	Elements,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js'
// import CheckoutForm from './CheckoutForm';
import axios from 'axios'
import CheckoutForm from './CheckoutForm'
import { Box, Typography } from '@mui/material'

const stripePromise = loadStripe(
	'pk_test_51L1DNCDSQhYM6brtwNmSUwREJfOaTnI8RVEu5U7tRoLvCbvvPhH2BsKB07x5SJzT2UJCsYvXF6GsofraA93lunJJ00c5Oqj7Dy'
)
const Payment = () => {
	//  const [property, setProperty] = useState({})
	//  const [propertyLoading, setPropertyLoading] = useState(true)
	//  const { id } = useParams()
	//  useEffect(() => {
	//       const url = `https://neighbour-home--server.herokuapp.com/sellPost/${id}`;
	//       axios.get(url)
	//            .then(data => {
	//                 setProperty(data.data)
	//                 setPropertyLoading(false)
	//            })
	//  }, [id])

	//  const { _id, images, length, location, propertyName, propertyPrice, propertyType, rating, selingarea, sellerName, totalarea, width } = property;
	//  if (propertyLoading) {
	//       return <Box>Loading</Box>
	//  }
	//   box-2       className="flex justify-evenly flex-col-reverse sm:flex-row py-16 w-11/12 sm:container mx-auto"
	//   box-3          className="flex flex-col p-2 sm:p-10 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg"
	//   box-4   className='w-11/12 mx-auto sm:mx-0 mb-10 sm:mb-0 sm:w-4/12 text-center'
	return (
		<Box style={{ marginTop: '129px' }}>
			<Box>
				<Box>
					<Box>
						<Typography>Hello from payment</Typography>
						{/* <h2 className='text-xl'>{propertyName}</h2>
                              <img className="w-56   mx-auto sm:w-full h-32 sm:h-96 md:h-48 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src={images} alt="" />
                              <h2 className=''>Order Length : {length}</h2>
                              <h2 className=''>Price : {propertyPrice}</h2> */}
					</Box>

					<Elements stripe={stripePromise}>
						<CheckoutForm
						//    property={property}
						/>
					</Elements>
				</Box>
			</Box>
		</Box>
	)
}

export default Payment
