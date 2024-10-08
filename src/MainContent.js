import React from 'react';
import AdmissionsForm from './components/FormSection';

function MainContent() {
    return (
        <main>
            <div className="left-content">
                {/* Admissions Form */}
                <AdmissionsForm />
            </div>

            <div className="right-content">
                {/* Why UPES */}
                <section>
                    <h2>Why Join Us</h2>
                    <ul>
                        <li>Top-ranked faculty</li>
                        <li>State-of-the-art facilities</li>
                        <li>Networking opportunities</li>
                        <li>Excellent placement support</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default MainContent;
