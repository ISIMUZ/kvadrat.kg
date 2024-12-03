import React from 'react'

const AddressWithIcon = ({ icon: Icon, text, href, id, ...props }) => {
	return (
		<a
			href={href}
      id={id}
			target='_blank'
			rel='noopener noreferrer'
			className='flex items-center gap-x-3 text-xs leading-5 text-address-color font-medium'
      {...props}
		>
			<Icon className='text-base' style={{ marginTop: '1px' }} />
			<p className='hover:text-red transition-all duration-300'>{text}</p>
		</a>
	)
}

export default AddressWithIcon
