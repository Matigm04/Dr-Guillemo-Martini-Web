import { useRef, useEffect } from "react"
import { X, Clock, AlertCircle } from "lucide-react"
import { BeforeAfterSlider } from "./BeforeAfterSlider"
import { TestimonialCarousel } from "./TestimonialCarousel"
import { ConciergeForm } from "./ConciergeForm"

export function ServiceModal({ treatment, isOpen, onClose }) {
  // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'unset';
        }
        return () => {
        document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

  if (!isOpen || !treatment) return null

  return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-0 md:p-6 animate-fade-in"
            >
                {/* Modal Container */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-[90%] max-w-6xl max-h-[85vh] md:max-h-[90vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row m-auto animate-fade-in"
                >
                     {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-[60] p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5 text-gray-700" />
                    </button>

                     {/* Scrollable Content Container */}
                     <div className="flex flex-col lg:flex-row w-full h-full overflow-y-auto">
                        
                        {/* Left Side - Image Slider & Testimonials */}
                        <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-0 md:p-6 flex flex-col">
                            {/* Image Slider Container with Fixed Height/Aspect on Desktop */}
                            <div className="w-full md:h-[450px] md:aspect-[4/3] relative flex-shrink-0 mb-6">
                                <div className="w-full h-full md:max-w-lg mx-auto">
                                    <BeforeAfterSlider
                                        imageBefore={treatment.imageBefore}
                                        imageAfter={treatment.imageAfter}
                                        alt={treatment.title}
                                        className="h-full w-full object-cover" 
                                    />
                                </div>
                            </div>

                            {/* Testimonials (Re-located here) */}
                            {treatment.testimonios && treatment.testimonios.length > 0 && (
                                <div className="w-full px-6 pb-6 md:pb-0">
                                    <div className="w-full border-t border-gray-200/60 pt-6">
                                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Experiencias reales</h4>
                                        <TestimonialCarousel testimonios={treatment.testimonios} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Side - Details */}
                        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col bg-white pb-20">
                            <div className="mb-6">
                                <h2 className="text-3xl font-light text-gray-900 mb-2">{treatment.title}</h2>
                                <p className="text-emerald-600 font-medium mb-4">{treatment.category}</p>
                                
                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                                        <span>{treatment.duration}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {treatment.features?.map((feature, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-8 font-light">
                                    {treatment.description}
                                </p>

                                {/* Problem Section (Simulated) */}
                                <div className="flex items-start gap-4 mb-8">
                                    <div className="p-2 bg-red-50 rounded-lg shrink-0">
                                        <AlertCircle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-900 mb-1">¿Para quién es ideal?</h3>
                                        <p className="text-sm text-gray-500 font-light">
                                            Recomendado si buscas mejorar {treatment.features?.join(", ")?.toLowerCase()} de manera profesional.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Form */}
                            <div className="mt-auto space-y-8">
                                <ConciergeForm initialTreatment={treatment.title} />
                            </div>
                        </div>

                     </div>


                </div>
            </div>
            </>
  )
}
