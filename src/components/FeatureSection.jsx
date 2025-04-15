import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Shield } from "lucide-react";

const features = [
    {
        icon: <CheckCircle className="w-12 h-12 text-indigo-600" />,
        title: 'Easy Scheduling',
        description: 'Plan meetings effortlessly with an intuitive interface.'
    },
    {
        icon: <Calendar className="w-12 h-12 text-indigo-600" />,
        title: 'Calendar Integration',
        description: 'Sync meetings with Google Calendar and Outlook.'
    },
    {
        icon: <Shield className="w-12 h-12 text-indigo-600" />,
        title: 'Secure & Reliable',
        description: 'Your data is encrypted and protected with industry standards.'
    }
];

function FeatureSection() {
  return (
    <div>
        <section className="py-16 bg-gray-50 text-center">
            <h2 className="text-4xl font-bold font-[poppins] text-gray-900">Why Choose PlanWise?</h2>
            <p className="text-gray-600 mt-2 mb-8">Simplify your meeting scheduling with powerful features.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
                {features.map((feature,index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition">
                        <CardHeader className="flex flex-col items-center">
                            {feature.icon}
                            <CardTitle className="text-xl font-semibold mt-2">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )}

export default FeatureSection
