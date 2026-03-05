import React from 'react'
import Title from '@/components/Title'
import { PhoneCallIcon, CalendarClockIcon, ShieldPlusIcon } from 'lucide-react'

export const metadata = {
    title: "Veterinary Consultations - PetShop",
    description: "Book an orientative veterinary call for your pet.",
}

const VeterinaryPage = () => {
    return (
        <div className="mx-6 max-w-5xl mx-auto my-12 text-slate-700">
            <div className="text-center mb-10">
                <Title visibleButton={false} title="Veterinary Orientative Calls" description="Get professional advice for your pet from the comfort of your home." />
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="flex-1 bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Why book an orientative call?</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Sometimes you just need quick advice without the stress of traveling to the clinic.
                        Our orientative calls connect you with experienced veterinary professionals who can give you peace of mind, suggest home care, or recommend if an in-person visit is necessary.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <PhoneCallIcon className="text-indigo-500 mt-1" size={20} />
                            <span><strong>Immediate Advice:</strong> Quick answers to your pressing questions.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ShieldPlusIcon className="text-indigo-500 mt-1" size={20} />
                            <span><strong>Preventive Care:</strong> Tips on diet, behavior, and wellness.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CalendarClockIcon className="text-indigo-500 mt-1" size={20} />
                            <span><strong>Flexible Scheduling:</strong> Book a time that works for you.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6">Request a Call</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Pet's Name & Species</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Max (Dog)" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Briefly Describe the Issue or Topic</label>
                            <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24" placeholder="I'd like advice on my dog's diet..."></textarea>
                        </div>
                        <button type="button" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-lg font-medium">
                            Submit Request
                        </button>
                        <p className="text-xs text-slate-500 text-center mt-3">
                            Note: This service is for orientation only and does not replace emergency veterinary care.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VeterinaryPage
