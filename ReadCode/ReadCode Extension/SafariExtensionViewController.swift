//
//  SafariExtensionViewController.swift
//  ReadCode Extension
//
//  Created by Apple on 2021/5/24.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        return shared
    }()

}
