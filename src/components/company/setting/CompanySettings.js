import React from 'react'

import Tag from './Tag';
import AssignConversation from './AssignConversation';
import SecureConversation from './SecureConversation';
import WizardLayout from '../../layout/WizardLayout';
import QuickAnswers from './QuickAnswer';

import '../../common/pagination.css'
import './CompanySettings.css'

const CompanySettingsContent = () => {

    return (
        <div className='col-lg-7 col-md-12 col-12 px-3'>
            <Tag />
            <hr/>

            <QuickAnswers />
            <hr/>

            <AssignConversation />
            <hr/>

            <SecureConversation />
        </div>
    )
}

const CompanySettings = () => {
    return (
        <>
            <WizardLayout children={CompanySettingsContent()} name={"Settings"} />
        </>
    )
}

export default CompanySettings;