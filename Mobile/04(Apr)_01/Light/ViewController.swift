//
//  ViewController.swift
//  Light
//
//  Created by shunnamiki on 2021/04/15.
//

import UIKit

class ViewController: UIViewController {
    var lightOn = true
    
    override func viewDidLoad() {
        super.viewDidLoad()
        updateUI()
    }

    fileprivate func updateUI() {
        view.backgroundColor = lightOn ? .white : .black
    }
    
    @IBAction func buttonPressed(_ sender: Any) {
        lightOn.toggle();
        updateUI()
    }
}

