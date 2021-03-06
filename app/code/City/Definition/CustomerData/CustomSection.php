<?php

namespace City\Definition\CustomerData;

use City\Definition\Service\IpApiService;
use Magento\Customer\CustomerData\SectionSourceInterface;
use Magento\Customer\Model\Session;
use City\Definition\Service\Npcity;
use Zend_Http_Client_Exception;

class CustomSection implements SectionSourceInterface
{
    /**
     * @var Npcity
     */
    protected Npcity $npCity;

    /**
     * @var IpApiService
     */
    protected IpApiService $ipApiService;

    /**
     * @var Session
     */
    protected Session $customerSession;

    /**
     * @param Session $customerSession
     * @param IpApiService $ipApiService
     * @param Npcity $npCity
     */
    public function __construct(
        Session      $customerSession,
        IpApiService $ipApiService,
        Npcity       $npCity
    ) {
        $this->npCity = $npCity;
        $this->ipApiService = $ipApiService;
        $this->customerSession = $customerSession;
    }

    /**
     * @return string[]
     * @throws Zend_Http_Client_Exception
     */
    public function getSectionData(): array
    {
        $cityIp = $this->ipApiService->sendCity();
        $cityForm = $this->customerSession->getMyValue();
        if ($cityForm) {
            $cityIp = $cityForm;
        }
        return [
            'customdata' => $cityIp,
        ];
    }
}
