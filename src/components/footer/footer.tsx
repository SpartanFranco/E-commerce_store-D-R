import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white'>
			<div className='mx-auto max-w-7xl px-4 py-12'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
					{/* Company Info */}
					<div>
						<h3 className='mb-4 text-xl font-bold'>Your Brand</h3>
						<p className='text-gray-400'>
							Making shopping easier and more enjoyable for everyone.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='mb-4 text-xl font-bold'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-gray-400 transition hover:text-white'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/products'
									className='text-gray-400 transition hover:text-white'
								>
									Products
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-400 transition hover:text-white'
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href='/faq'
									className='text-gray-400 transition hover:text-white'
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className='mb-4 text-xl font-bold'>Customer Service</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/shipping'
									className='text-gray-400 transition hover:text-white'
								>
									Shipping Info
								</Link>
							</li>
							<li>
								<Link
									href='/returns'
									className='text-gray-400 transition hover:text-white'
								>
									Returns
								</Link>
							</li>
							<li>
								<Link
									href='/privacy'
									className='text-gray-400 transition hover:text-white'
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href='/terms'
									className='text-gray-400 transition hover:text-white'
								>
									Terms & Conditions
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className='mb-4 text-xl font-bold'>Stay Connected</h3>
						<p className='mb-4 text-gray-400'>Subscribe to our newsletter</p>
						<div className='flex'>
							<input
								type='email'
								placeholder='Enter your email'
								className='w-full rounded-l-md px-4 py-2 text-gray-900 focus:outline-none'
							/>
							<button className='rounded-r-md bg-blue-600 px-4 py-2 transition hover:bg-blue-700'>
								Subscribe
							</button>
						</div>

						{/* Social Media */}
						<div className='mt-6 flex space-x-4'>
							<a
								href='#'
								className='text-gray-400 transition hover:text-white'
							>
								<Facebook size={24} />
							</a>
							<a
								href='#'
								className='text-gray-400 transition hover:text-white'
							>
								<Twitter size={24} />
							</a>
							<a
								href='#'
								className='text-gray-400 transition hover:text-white'
							>
								<Instagram size={24} />
							</a>
							<a
								href='#'
								className='text-gray-400 transition hover:text-white'
							>
								<Linkedin size={24} />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 border-t border-gray-800 pt-8 text-center text-gray-400'>
					<p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
