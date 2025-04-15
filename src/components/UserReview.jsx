import React from 'react'

const reviews = [
  {
    feedback: 'PlanWise made scheduling so easy! Love it!',
    user: '- Alex Johnson'
  },
  {
    feedback: 'The best meeting tool I’ve used. Highly recommend!',
    user: '- Sarah Lee'
  }
];

function UserReview() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center font-[poppins]">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            {reviews.map((review, index)=>
            <div key={index} className="p-6 bg-white shadow rounded-lg">
              <p className="italic">{review.feedback}</p>
              <p className="mt-2 font-bold">{review.user}</p>
            </div>
          )}
          </div>
      </section>
    </div>
  )
}

export default UserReview
