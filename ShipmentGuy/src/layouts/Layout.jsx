import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout () {

	return (
		<div>
			Hello World, this is the Layout
			<Outlet />
		</div>
	)
	}